const toggleBtn = document.querySelector(".toggle");
const sidebar = document.getElementById("sideBar");
const overlay = document.getElementById("myOverlay");


toggleBtn.addEventListener("click", function(){
    sidebar.style.display = "block";
    overlay.style.display = "block";

});

overlay.addEventListener("click", function(){
    sidebar.style.display = "none";
    overlay.style.display = "none";

});
