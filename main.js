const toggleBtn = document.querySelector(".toggle");
const sidebar = document.querySelector(".sideBar");
const closeBtn = document.querySelector(".close-btn");


toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show");

})

