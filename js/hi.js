(() => {
  const message = "Hi! What are you doing here? :3";
  const devtoolsThreshold = 160;
  let hasSentMessage = false;

  function isDevToolsOpen() {
    return (
      window.outerWidth - window.innerWidth > devtoolsThreshold ||
      window.outerHeight - window.innerHeight > devtoolsThreshold
    );
  }

  window.setInterval(() => {
    if (hasSentMessage) return;
    if (isDevToolsOpen()) {
      console.log(message);
      hasSentMessage = true;
    }
  }, 500);
})();