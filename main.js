function myFunction() {
  var x = document.getElementById("mainNav");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.innerHTML = `<ul style="display: block;">
                <li><a href="../Home/home.html" class="header-button">Home</a></li>
                <li><a href="../Contact/contact.html" class="header-button">Contact</a></li>
                <li><a href="../About/about.html" class="header-button">About</a></li>
                <li><a href="../Feedback/feedback.html" class="header-button">Feedback</a></li>
                <li><a href="../Privacy-policy/privacy-policy.html" class="header-button">Privacy Policy</a></li>
                <li><a href="../Terms-and-conditions/terms-and-conditions.html" class="header-button">Terms and Conditions</a></li>
                </li>
            </ul>`
  }

}