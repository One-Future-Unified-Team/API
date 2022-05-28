        document.getElementById("heading").innerHTML =
        localStorage["title"] || "Welcome to Software and Website Developer Team Text Editor"; // default text
      document.getElementById("content").innerHTML =
        localStorage["text"] || "Welcome to Software and Website Developer Team Text Editor. A safe and secure place for everyone to edit their text securely. Edit this body text to get started. "; // default text
      
      setInterval(function() {
        // fuction that is saving the innerHTML of the div
        localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
        localStorage["text"] = document.getElementById("content").innerHTML; // content div
      }, 1000);
