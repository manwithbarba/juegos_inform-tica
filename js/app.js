(function () {
  const grid = document.getElementById("game-grid");
  const dialog = document.getElementById("game-dialog");
  const dialogContent = document.getElementById("game-dialog-content");
  let activeGame = null;
  let focusReturn = null;

  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
  const progressFor = (game) => SJ.readProgress()[game.id] || { attempts: 0, bestScore: 0, completed: false };

  function renderSummary() {
    const progress = SJ.readProgress();
    const completed = SJ.state.games.filter((game) => progressFor(game).completed).length;
    const score = SJ.state.games.reduce((sum, game) => sum + (progress[game.id]?.bestScore || 0), 0);
    document.getElementById("completed-count").textContent = completed;
    document.getElementById("total-score").textContent = score;
  }

  function renderCards() {
    if (!SJ.state.games.length) {
      grid.innerHTML = '<div class="empty-state">Todavía no hay juegos cargados.</div>';
      return;
    }
    grid.innerHTML = SJ.state.games.map((game) => {
      const progress = progressFor(game);
      const total = game.questions?.length || 1;
      const completed = progress.completed ? total : 0;
      const percent = Math.round((completed / total) * 100);
      return `<article class="game-card">
        <div>
          <span class="pill teal">${escapeHTML(game.tp)}</span>
          <h3>${escapeHTML(game.title)}</h3>
          <p>${escapeHTML(game.description)}</p>
          <div class="game-meta"><span class="pill">${total} desafíos</span><span class="pill">${escapeHTML(game.mechanic || "Decisiones")}</span></div>
        </div>
        <div>
          <div class="progress-line" aria-label="Progreso: ${percent}%"><span style="width:${percent}%"></span></div>
          <div class="game-card-footer"><small>${progress.completed ? `Mejor resultado: ${progress.bestScore} puntos` : "Sin completar"}</small><button class="button play-game" data-game-id="${escapeHTML(game.id)}" type="button">Jugar</button></div>
        </div>
      </article>`;
    }).join("");
    grid.querySelectorAll(".play-game").forEach((button) => button.addEventListener("click", () => openGame(button.dataset.gameId, button)));
  }

  function openGame(gameId, trigger) {
    activeGame = SJ.state.games.find((game) => game.id === gameId);
    if (!activeGame) return;
    focusReturn = trigger || document.activeElement;
    dialog.hidden = false;
    document.body.style.overflow = "hidden";
    renderIntro();
  }

  function closeGame() {
    dialog.hidden = true;
    dialogContent.innerHTML = "";
    document.body.style.overflow = "";
    if (focusReturn?.focus) focusReturn.focus();
  }

  function renderIntro() {
    dialogContent.innerHTML = `<div class="dialog-top"><div><p class="eyebrow">${escapeHTML(activeGame.tp)}</p><h2 id="game-dialog-title">${escapeHTML(activeGame.title)}</h2></div><button class="icon-button close-game" type="button" aria-label="Cerrar juego">×</button></div>
      <p class="game-intro">${escapeHTML(activeGame.intro || activeGame.description)}</p>
      <div class="scoreboard"><span>${escapeHTML(activeGame.mechanic || "Desafío interactivo")}</span><span>${activeGame.questions.length} desafíos</span><span>3 vidas</span></div>
      <div class="dialog-actions"><button class="button button-muted close-game" type="button">Volver</button><button class="button start-game" type="button">Comenzar misión</button></div>`;
    dialogContent.querySelectorAll(".close-game").forEach((button) => button.addEventListener("click", closeGame));
    dialogContent.querySelector(".start-game").addEventListener("click", () => playGame());
    dialogContent.querySelector(".start-game").focus();
  }

  function playGame() {
    const session = { index: 0, score: 0, correct: 0, lives: 3, combo: 0, order: [], answered: false };
    renderQuestion(session);
  }

  function renderQuestion(session) {
    const question = activeGame.questions[session.index];
    session.answered = false;
    session.order = [];
    const questionNumber = session.index + 1;
    let content = `<div class="dialog-top"><div><p class="eyebrow">${escapeHTML(activeGame.tp)} · Misión ${questionNumber}/${activeGame.questions.length}</p><h2 id="game-dialog-title">${escapeHTML(activeGame.title)}</h2></div><button class="icon-button close-game" type="button" aria-label="Cerrar juego">×</button></div>
      <div class="scoreboard"><span>Puntos: <strong>${session.score}</strong></span><span>Vidas: <strong>${"♥".repeat(session.lives)}${"♡".repeat(3 - session.lives)}</strong></span><span>Combo: <strong>${session.combo}</strong></span></div>
      <div class="question-box"><h3>${escapeHTML(question.prompt)}</h3>${question.note ? `<p class="question-note">${escapeHTML(question.note)}</p>` : ""}${renderInteraction(question)}</div>
      <div class="feedback" id="feedback" aria-live="polite">Elegí una respuesta para continuar.</div>
      <div class="dialog-actions"><button class="button button-muted close-game" type="button">Salir</button><button class="button next-question" type="button" disabled>${questionNumber === activeGame.questions.length ? "Ver resultado" : "Siguiente desafío"}</button></div>`;
    dialogContent.innerHTML = content;
    dialogContent.querySelectorAll(".close-game").forEach((button) => button.addEventListener("click", closeGame));
    dialogContent.querySelector(".next-question").addEventListener("click", () => {
      if (session.index >= activeGame.questions.length - 1) finishGame(session);
      else { session.index += 1; renderQuestion(session); }
    });
    bindInteraction(question, session);
  }

  function renderInteraction(question) {
    if (question.type === "order") return `<div class="option-list order-list" role="listbox" aria-label="Orden elegido">${question.items.map((item, index) => `<button class="order-item" type="button" data-order-index="${index}">${index + 1}. ${escapeHTML(item)}</button>`).join("")}</div><p class="question-note">Seleccioná los pasos en el orden correcto.</p><button class="button check-order" type="button">Comprobar orden</button>`;
    return `<div class="option-list">${question.options.map((option, index) => `<button class="option-button" type="button" data-option-index="${index}">${escapeHTML(option.label || option)}</button>`).join("")}</div>`;
  }

  function bindInteraction(question, session) {
    if (question.type === "order") {
      dialogContent.querySelectorAll(".order-item").forEach((button) => button.addEventListener("click", () => {
        const index = Number(button.dataset.orderIndex);
        if (session.order.includes(index)) { session.order = session.order.filter((value) => value !== index); button.classList.remove("selected"); }
        else { session.order.push(index); button.classList.add("selected"); }
        button.textContent = `${session.order.length}. ${question.items[index]}`;
        dialogContent.querySelectorAll(".order-item").forEach((item) => { const itemIndex = Number(item.dataset.orderIndex); const position = session.order.indexOf(itemIndex); item.textContent = `${position >= 0 ? position + 1 : "–"}. ${question.items[itemIndex]}`; });
      }));
      dialogContent.querySelector(".check-order").addEventListener("click", () => resolveAnswer(session, session.order.join(",") === question.answer.join(","), question.feedback));
      return;
    }
    dialogContent.querySelectorAll(".option-button").forEach((button) => button.addEventListener("click", () => {
      const index = Number(button.dataset.optionIndex);
      const correct = Array.isArray(question.answer) ? question.answer.includes(index) : index === question.answer;
      resolveAnswer(session, correct, question.options[index]?.feedback || question.feedback, index);
      dialogContent.querySelectorAll(".option-button").forEach((option) => { option.disabled = true; if (Number(option.dataset.optionIndex) === question.answer) option.classList.add("correct"); });
      if (!correct) button.classList.add("incorrect");
    }));
  }

  function resolveAnswer(session, correct, feedback, selectedIndex) {
    if (session.answered) return;
    session.answered = true;
    const box = dialogContent.querySelector("#feedback");
    if (correct) { session.correct += 1; session.combo += 1; session.score += 100 + session.combo * 20; box.className = "feedback good"; box.textContent = `¡Muy bien! ${feedback || "La decisión es correcta."}`; }
    else { session.lives = Math.max(0, session.lives - 1); session.combo = 0; box.className = "feedback bad"; box.textContent = `Revisá la evidencia. ${feedback || "La respuesta esperada era otra."}`; }
    const next = dialogContent.querySelector(".next-question");
    next.disabled = false;
    if (session.lives === 0 && session.index < activeGame.questions.length - 1) next.textContent = "Continuar con una nueva oportunidad";
    if (selectedIndex !== undefined) dialogContent.querySelectorAll(".option-button").forEach((button) => { if (Number(button.dataset.optionIndex) === selectedIndex) button.setAttribute("aria-pressed", "true"); });
  }

  function finishGame(session) {
    const accuracy = Math.round((session.correct / activeGame.questions.length) * 100);
    const saved = SJ.saveResult(activeGame, { score: session.score, accuracy });
    dialogContent.innerHTML = `<div class="result-card"><p class="eyebrow">Misión completada</p><h2 id="game-dialog-title">${escapeHTML(activeGame.title)}</h2><div class="result-score">${session.score}</div><span class="result-badge">${accuracy}% de respuestas correctas</span><p class="result-copy">Acertaste ${session.correct} de ${activeGame.questions.length} desafíos. Tu mejor resultado guardado es de ${saved.bestScore} puntos.</p><div class="dialog-actions"><button class="button button-muted close-game" type="button">Volver al mapa</button><button class="button start-game" type="button">Jugar de nuevo</button><button class="button button-secondary export-progress" type="button">Exportar progreso</button></div></div>`;
    dialogContent.querySelector(".close-game").addEventListener("click", closeGame);
    dialogContent.querySelector(".start-game").addEventListener("click", playGame);
    dialogContent.querySelector(".export-progress").addEventListener("click", SJ.downloadProgress);
    renderCards(); renderSummary();
  }

  document.getElementById("reset-progress").addEventListener("click", () => { if (window.confirm("¿Querés borrar el progreso guardado en este navegador?")) { SJ.resetProgress(); renderCards(); renderSummary(); } });
  dialog.addEventListener("click", (event) => { if (event.target === dialog) closeGame(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !dialog.hidden) closeGame(); });
  renderCards(); renderSummary();
})();
