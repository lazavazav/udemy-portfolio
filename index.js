//code snippet from materialize for hamburger menu in navbar
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});
//need to call the function for the hamburger menu to work
M.AutoInit();

//get modal element for courses
let modal = document.getElementById("coursesModal");

//get open modal button
let courseLink = document.getElementById("educ");

//get close button
let closeBtn = document.querySelector("#closeBtn");

//listen for click on Star Icon
courseLink.addEventListener("click", openModal);
//listen for click on modal x button
closeBtn.addEventListener("click", closeModal);

//function to open modal
function openModal() {
  modal.style.display = "block";
}

//function to close modal
function closeModal(){
  modal.style.display = "none";
}



 