console.log("Content script loaded")

function stringToJson(text) {
    try {
      return JSON.stringify(JSON.parse(text),undefined, 4)
    } catch (error) {
      console.log("Invalid Json String: " + error)
      return text
    }
  }

function copyToClipboard(text) {
    const textArea = document.createElement('textarea')
    document.body.appendChild(textArea)
    textArea.innerHTML = text
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
}

chrome.storage.local.get("formatter", function (storage) {
    var selectedText=storage.formatter
    var formattedText=stringToJson(selectedText) 
    console.log("formatted" + formattedText)
    copyToClipboard(formattedText)
    chrome.storage.local.remove("formatter");
});
