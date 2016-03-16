// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(Tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "legible_activate"});
  });
});