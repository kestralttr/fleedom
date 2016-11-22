

document.body.onload = function() {
  chrome.storage.sync.clear(alert("cleared"));
  chrome.storage.sync.set(
    {"phone-number": 123456789},
    alert("save successful")
  );

  chrome.storage.sync.get(
    "phone-number",
    function(item) {
      if (!chrome.runtime.error) {
        console.log(item);
        document.getElementById("phone-number").value = item["phone-number"];
      }
    }
  );

};
