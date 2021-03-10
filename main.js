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


/* national brands section */

window.onload = () => {
    const brands = Array.from(document.getElementsByClassName('brands'));
    console.log(brands);

    //loop through listing
    brands.forEach(brand => handleSlider(brand));
}

const handleSlider = brand => {
    //get the first element of the array [0]
   //const list = document.getElementByClassName('brand')[0]
    const arrowLeft = document.getElementByClassName('arrow-left')[0]
    const arrowRight = document.getElementByClassName('arrow-right')[0]


    if(!arrowLeft || !arrowRight){
        console.log(brand);
        return 
    }

    arrowRight.addEventListener('click', e => {
        e.preventDefault()
        brand.scrollTo({
            left: brand.offsetWidth,
            behaviour: 'smooth'

        })
    })
}