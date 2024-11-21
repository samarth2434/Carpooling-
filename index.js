// Check if the browser supports the Notification API
if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  
  // Function to request notification permission
  function requestNotificationPermission() {
    Notification.requestPermission().then(function (result) {
      if (result === "granted") {
        showNotification("Notification permission granted!");
      } else {
        showNotification("Notification permission denied.");
      }
    });
  }
  
  // Function to show a notification
  function showNotification(message) {
    new Notification(message);
  }
  
  // Attach click event listener to the button
  document.getElementById("notifyButton").addEventListener("click", function() {
    requestNotificationPermission();
  });

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}