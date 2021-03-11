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
    const list = brand.getElementsByClassName('brand')[0];
    const arrowLeft = brand.getElementsByClassName('arrow-left')[0];
    const arrowRight = brand.getElementsByClassName('arrow-right')[0];


    if(!list || !arrowLeft || !arrowRight){
        console.log(brand);
        return 
    }

    arrowRight.addEventListener('click', e => {
        e.preventDefault();

        hanndleClassChange('arrow-right');

        list.scrollTo({
            left: list.offsetWidth,
            behavior: 'smooth',

        })
    })
    arrowLeft.addEventListener('click', e => {
        e.preventDefault();
        
        hanndleClassChange('arrow-left');

        list.scrollTo({
            left: 0,
            behavior: 'smooth',

        })
    })

    // class change button
    const hanndleClassChange = direction => {
        
        if(direction == 'arrow-right'){
            arrowRight.classList.remove('darker');
            arrowLeft.classList.add('darker');
        }else if(direction == "arrow-left"){
            arrowLeft.classList.remove('darker');
            arrowRight.classList.add('darker');
        }
    }
}