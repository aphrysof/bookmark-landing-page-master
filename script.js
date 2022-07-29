function openFeatures(evt, featureName) {
  //declaring the variables as per the classnames
  let i, features_buttons, features_illustrations;

  //we are gettuing all element the the classname and hide the content
  features_illustrations = document.getElementsByClassName(
    "features_illustrations"
  );

  for (i = 0; i < features_illustrations.length; i++) {
    features_illustrations[i].style.display = "none";
  }
  //getting all the elements with the class and remove the class active

  features_buttons = document.getElementsByClassName("features_buttons");
  for (i = 0; i < features_buttons.length; i++) {
    features_buttons[i].className.replace("active", "");
  }

  document.getElementById(featureName).style.display = "flex";
  evt.currentTarget.className += "active";
}
// we are getting the element with the id and clicking on it
document.getElementById("defaultOpen").click();

var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var accordion_details = this.nextElementSibling;
    if (accordion_details.style.display === "block") {
      accordion_details.style.display = "none";
    } else {
      accordion_details.style.display = "block";
    }
  });
}

var form = document.getElementById("contact");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.elements["email"];

  let emailAddress = email.value;
  alert(emailAddress);
  window.load("/");
});
