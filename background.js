
chrome.commands.onCommand.addListener(function(command) {
  if(command === "text-hotkey") {
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

          // alert("text request");

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
  } else if (command === "alert-hotkey") {
    chrome.storage.sync.get(
      "alert-message",
      function(item) {
        if (!chrome.runtime.error && item["alert-message"] !== undefined) {

          const alarmSound = new Audio();
          alarmSound.src = "alarm_sound.mp3";

          setTimeout(
            function() {chrome.browserAction.setBadgeText({text: "A"});
              chrome.browserAction.setBadgeBackgroundColor({color: "gray"})},
            50
          );
          setTimeout(
            function() {chrome.browserAction.setBadgeText({text: ""});},
            750
          );
          setTimeout(
            function() {
              alarmSound.play();
              alert(item["alert-message"]);
            },
            10000
          );
        }
      }
    );
  }
});
