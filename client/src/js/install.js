const butInstall = document.getElementById("buttonInstall");
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  console.log("Install Pressed");
  const deferredPrompt = window.deferredPrompt;
  if (!deferredPrompt) {
    return;
  }
  deferredPrompt.prompt();
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});
