chrome.action.onClicked.addListener((tab) => {
  if (tab.url && tab.url.startsWith('https://www.linkedin')) {
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ['ghibli-style.css']
    }).catch(err => console.error("Error inserting CSS:", err));

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: toggleGhibliStyle,
    }).catch(err => console.error("Error executing script:", err));
  }
});

function toggleGhibliStyle() {
  if (document.body.classList.contains('ghibli-mode')) {
    // Remove Ghibli mode
    document.body.classList.remove('ghibli-mode');
    const overlay = document.querySelector('.ghibli-overlay');
    if (overlay) overlay.remove();
  } else {
    // Apply Ghibli mode
    document.body.classList.add('ghibli-mode');
    const overlay = document.createElement('div');
    overlay.className = 'ghibli-overlay';
    document.body.appendChild(overlay);
  }
}
