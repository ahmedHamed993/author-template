let nav = document.getElementById("nav");
let linksContainer = document.querySelector(".nav .links");
let allLinks = linksContainer.querySelectorAll(".nav-link");
let menuIcon = document.querySelector(".nav .menu-icon");
let sections = document.querySelectorAll("section");

let statsSection = document.querySelector(".stats");
let countStart = false;

let sideLinks = document.querySelectorAll(".book-content .side-nav a");
let chaptersArticles = document.querySelectorAll(".book-content .articles article");


//book content vars 
let sidenav = document.querySelector(".book-content .side-nav");
let sidenavLinks = sidenav.querySelector("a");
let articles = document.querySelector(".book-content .articles article")
menuIcon.addEventListener("click",function(){
    if(linksContainer.classList.contains("show"))
    {
        setTimeout(()=>{
            linksContainer.classList.remove("show");
        },200)
        allLinks.forEach(link => {
            link.classList.remove("show");
        });
        menuIcon.classList.remove("close");
    }
    else 
    {
        menuIcon.classList.add("close");
        linksContainer.classList.add("show");
        setTimeout(()=>{
            allLinks.forEach(link => {
                link.classList.add("show");
            })
        },200)
    }
})
window.addEventListener("scroll",()=>{
    sections.forEach((sec , index) => {
        if(window.scrollY > sec.offsetTop - 300)
        {
            allLinks.forEach(link => {
                link.classList.remove("active");
            })
            allLinks[index].classList.add("active");
        }
    })
    if(window.scrollY > 300)
    {
        nav.classList.add("slide-down");
    }
    else if (window.scrollY < 300 && window.scrollY > 220 )
    {
        nav.classList.contains("slide-down") ? nav.classList.add("slide-up") : "";
    }
    else if (window.screenY < 200)
    {
        nav.classList.remove("slide-down");
        nav.classList.remove("slide-up");
    }
});


//change value of boxes in stats when scroll 
window.addEventListener("scroll",()=>{
    if(!countStart)
    {
        if(window.scrollY >= statsSection.offsetTop - 100)
        {
            let boxes = statsSection.querySelectorAll(".box");
            boxes.forEach(box => {
                let goal = box.dataset.value;
                let boxNum = box.querySelector("h3");
                let countup = setInterval(()=> {
                    goal < 5000 ? boxNum.textContent ++ : boxNum.textContent = parseInt(boxNum.textContent) + 100;
                    if(boxNum.textContent == goal)
                    {
                        clearInterval(countup);
                    }
                },goal < 5000 ? 5000 / parseInt(goal) : 5000 / parseInt(goal) * 100) 
            });
            countStart = true;
        }
        
    }
    
})


// add class active on side link when scroll when scrolly match offset top of the element 
window.addEventListener("scroll",()=>{
    chaptersArticles.forEach((el , index) => {
        if(window.scrollY > el.offsetTop -300)
        {
            sideLinks.forEach(link => {
                link.classList.remove("active");
            })
            sideLinks[index].classList.add("active");
        }
    })
})