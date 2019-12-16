// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
updatePage()
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

function  updatePage(){
  document.getElementById("text")
  .innerHTML = "This is really cool!";
}
