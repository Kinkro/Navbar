

// selecting items

const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// Adding /removing .show-links class
toggleBtn.addEventListener("click", function(){
    // if(!links.classList.contains("show-links")){
    //     links.classList.add("show-links");
    // }else{
    //     links.classList.remove("show-links");
    // }

    links.classList.toggle("show-links");
});