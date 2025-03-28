function applyGhibliMode() {
  document.body.classList.add('ghibli-mode');
  const overlay = document.createElement('div');
  overlay.className = 'ghibli-overlay';
  document.body.appendChild(overlay);
}

function removeGhibliMode() {
  document.body.classList.remove('ghibli-mode');
  
  const overlay = document.querySelector('.ghibli-overlay');
  if (overlay) {
    overlay.remove();
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleGhibli') {
    if (document.body.classList.contains('ghibli-mode')) {
      removeGhibliMode();
    } else {
      applyGhibliMode();
    }
    sendResponse({status: 'success'});
  }
});
window.enhanceGhibliStyle = applyGhibliMode;
