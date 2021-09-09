chrome.contextMenus.create({
  title: "JsonFormatter",
  id: "formatter",
  contexts: ["selection"],

}, () => { console.log("Context loaded") })

chrome.contextMenus.onClicked.addListener((info, tabs) => {
  selectedText = info.selectionText
  console.log("Selected text: " + selectedText)

  chrome.storage.local.set({
    formatter: selectedText
  })
  if (selectedText) {
    chrome.scripting.executeScript({
      target: { tabId: tabs.id },
      files: ['content-script.js']
    });
  }
})