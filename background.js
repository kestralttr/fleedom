
chrome.commands.onCommand.addListener(function(command) {
  if(command === "test-hotkey"){
    chrome.storage.sync.get(
      "phone-number",
      function(item) {
        if (!chrome.runtime.error && item["phone-number"] !== undefined) {
          // $.ajax({
          //   type: "POST",
          //   url: "http://textbelt.com/text",
          //   data: {
          //     number: item["phone-number"],
          //     message:"Thank you for using Fleedom!"
          //   },
          //   success: alert("AJAX request successful!")
          // });
          // alert("stand-in request");


          setTimeout(
            function() {chrome.browserAction.setBadgeText({text: "T"});
              chrome.browserAction.setBadgeBackgroundColor({color: "gray"})},
            50
          );
          setTimeout(
            function() {chrome.browserAction.setBadgeText({text: ""});},
            750
          );
        }
      }
    );
  }
});
