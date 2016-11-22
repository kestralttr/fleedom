

document.body.onload = function() {

  chrome.storage.sync.get(
    "phone-number",
    function(item) {
      if (!chrome.runtime.error && item["phone-number"] !== undefined) {
        document.getElementById("phone-number").value = item["phone-number"];
      }
    }
  );

  chrome.storage.sync.get(
    "alert-message",
    function(item) {
      if (!chrome.runtime.error && item["alert-message"] !== undefined) {
        document.getElementById("alert-message").value = item["alert-message"];
      }
    }
  );

};

document.getElementById("set-data").onclick = function() {
  let pn = document.getElementById("phone-number").value;
  let am = document.getElementById("alert-message").value;
  chrome.storage.sync.clear();
  chrome.storage.sync.set(
    {"phone-number": pn}
  );
  chrome.storage.sync.set(
    {"alert-message": am}
  );
  window.close();
};
