(function () {
  const progressKey = "juegos-informatica-progress-v1";
  const state = { games: [] };

  function readProgress() {
    try {
      const raw = window.localStorage.getItem(progressKey);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  }

  function writeProgress(progress) {
    try { window.localStorage.setItem(progressKey, JSON.stringify(progress)); } catch (_) { /* navegación sin persistencia */ }
  }

  function registerGame(game) {
    if (!game || !game.id) return;
    state.games.push(game);
  }

  function saveResult(game, result) {
    const progress = readProgress();
    const previous = progress[game.id] || { attempts: 0, bestScore: 0, completed: false, lastAttempt: null };
    progress[game.id] = {
      attempts: previous.attempts + 1,
      bestScore: Math.max(previous.bestScore || 0, result.score),
      completed: true,
      lastAttempt: new Date().toISOString(),
      lastAccuracy: result.accuracy,
    };
    writeProgress(progress);
    return progress[game.id];
  }

  function resetProgress() {
    try { window.localStorage.removeItem(progressKey); } catch (_) { /* no-op */ }
  }

  function downloadProgress() {
    const blob = new Blob([JSON.stringify(readProgress(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "progreso-juegos-informatica.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  window.SJ = { state, registerGame, readProgress, writeProgress, saveResult, resetProgress, downloadProgress };
})();
