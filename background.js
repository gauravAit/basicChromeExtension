chrome.browserAction.onClicked.addListener(function(tab) {
  // Sending a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "I was clicked", "country": "INDIA"});
  });
});
