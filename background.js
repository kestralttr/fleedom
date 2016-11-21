
chrome.commands.onCommand.addListener(function(command) {
  if(command === "test-hotkey"){
    $.ajax({
      type: "POST",
      url: "http://textbelt.com/text",
      data: {
        number: 2096145459,
        message:"Guess who got his API working?  Mwahahaha."
      },
      success: alert("AJAX request successful!")
    });
  }
});
