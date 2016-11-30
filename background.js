
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

    // chrome.notifications.create("notify1", {
    //   iconUrl: "http://www.google.com/favicon.ico",
    //   type: "basic",
    //   title: "Primary Title",
    //   message: "Primary message to display",
    //   priority: 1,
    // });

    chrome.storage.sync.get(
      "alert-message",
      function(item) {
        if (!chrome.runtime.error && item["alert-message"] !== undefined) {

          const alarmSound = new Audio();
          alarmSound.src = "alarm_sound.mp3";
          alarmSound.loop = true;

          chrome.notifications.onClicked.addListener(function() {
            alarmSound.pause();
            alarmSound.currentTime = 0;
            chrome.notifications.clear("alarm");
          });
          chrome.notifications.onClosed.addListener(function() {
            alarmSound.pause();
          });

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
              chrome.notifications.create("alarm", {
                iconUrl: "http://www.bigdogbiteshard.com/assets/graphic/Icons/signs_icons/Exclamation%20Mark%20(Error)/Exclamation%20Mark%20(Error)_512x512.png",
                type: "basic",
                title: "Reminder",
                message: item["alert-message"],
                priority: 1,
              });
            },
            10000
          );
        }
      }
    );
  } else if (command === "error-hotkey") {
    // alert("error");
      // const newURL = "http://google.com";
      // chrome.tabs.create({url: newURL});

      // DOESN'T WORK!!!
      // let tabs = chrome.tabs.query({currentWindow: true, active: true});
      // tabs.forEach(function(tab) {
      //   tab.executeScript(null,
      //   {code: "document.body.style.zoom='2'"})
      // });

      //DOESN'T WORK!!!
      // chrome.tabs.query({},function(tabs){
      //   tabs.forEach(function(tab){
      //     tab.executeScript(null,
      //       {code: "document.body.style.zoom='2'"}
      //     );
      //   });
      // });

      //WORKS!!

      chrome.tabs.executeScript(null,
        {code: "document.body.style.zoom='2'"}
      );
      chrome.tabs.executeScript(null,
        {code: "document.body.getElementsByTagName('a').fontSize='78px'"}
      );
      chrome.tabs.executeScript(null,
        {code: "document.body.style.fontSize='78px'"}
      );
      chrome.tabs.executeScript(null,
        {code: "document.body.getElementsByTagName('div').fontSize='78px'"}
      );
      chrome.tabs.executeScript(null,
        {code: "document.body.getElementsByTagName('span').fontSize='78px'"}
      );
      chrome.tabs.executeScript(null,
        {code: "document.body.style.color='white'"}
      );
      chrome.tabs.executeScript(null,
        {code: "document.getElementsByTagName('p').fontSize='78px'"}
      );

      setTimeout(
        function() {chrome.browserAction.setBadgeText({text: "E"});
          chrome.browserAction.setBadgeBackgroundColor({color: "gray"})},
        50
      );
      setTimeout(
        function() {chrome.browserAction.setBadgeText({text: ""});},
        750
      );

  }
});
