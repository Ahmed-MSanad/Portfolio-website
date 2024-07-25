// nab links motion effect:
if(window.innerWidth > 1024){ // for large screens only
    $(".nav-links ul").css({cssText: `
            position: absolute;
            top: -100px;
            left: 50%;
            transform: translate(-50%, -50%);
        `});
    $(".nav-links ul").animate({top: "50px"}, 700);
    $(".nav-links ul").animate({top: "0"}, 700, function(){
        $(".nav-links ul").css({cssText: `position: static;`})
    });
}


// Dark mode button:
$('#darkModeBtn').on("click",function(){
    $("html").toggleClass("dark");
    $("#darkModeBtn").toggleClass("fa-sun fa-moon");
});

// nav bar btns:
// open btn:
$("#openBtn").on("click", function(){
    $("#openBtn").toggleClass("hidden");
    $("#closeBtn").toggleClass("hidden");
    // $(".nav-links").slideToggle();
    $(".nav-links").css({display: "flex"});
});
// close btn:
$("#closeBtn").on("click", function(){
    $("#openBtn").toggleClass("hidden");
    $("#closeBtn").toggleClass("hidden");
    // $(".nav-links").slideToggle();
    $(".nav-links").css({display: "none"});
});

// using JS event delegation => ul delegate it's children li(s):
let nav_links = document.querySelector(".nav-links ul");
nav_links.addEventListener("click",function(e){
    if(e.target !== nav_links){
        let current_active_link = document.querySelector(".active");
        current_active_link.classList.remove("active");
        current_active_link.classList.add("link_line");
        e.target.classList.add("active");
        e.target.classList.remove("link_line");
    }
});


// change nav bg color with scrolling:
window.addEventListener("scroll",()=>{
    // if(document.querySelector("#aboutMe").getBoundingClientRect().top <= $("header").height()){}
    if($("#aboutMe").offset().top - $(window).scrollTop() <= $("header").height()){
        $("header").addClass("!bg-rose-600 dark:!text-white dark:!bg-cyan-500");
        $(".nav-links").addClass("dark:!bg-cyan-500");
        $(".nav-links ul").addClass("!bg-rose-600 dark:!bg-cyan-500");
    }
    else{
        $("header").removeClass("!bg-rose-600 dark:!text-white dark:!bg-cyan-500");
        $(".nav-links").removeClass("dark:!bg-cyan-500");
        $(".nav-links ul").removeClass("!bg-rose-600 dark:!bg-cyan-500");
    }
});


// moving-title:
function title_animation(){
    let current_title = document.querySelector(".moving-title span.shown");
    let next_title = "";

    if(!current_title.nextElementSibling){
        next_title = current_title.parentElement.children[0];
    }
    else{
        next_title = current_title.nextElementSibling;
    }

    current_title.classList.remove("shown");
    current_title.classList.add("hidden");

    next_title.classList.add("shown");
    next_title.classList.remove("hidden");

    $(".moving-title").animate({width: "100%"}, 1000);
}

$(".moving-title").animate({width: "0px"}, 1000, title_animation);
let x = setInterval(function(){
    $(".moving-title").animate({width: "0px"}, 1000, title_animation);
},3000);


// // left and right animation:
// let aboutMe = document.querySelector("#aboutMe");
// let left = document.querySelector("#aboutMe .left");
// let right = document.querySelector("#aboutMe .right");
// window.addEventListener("scroll", function(){
//     let docRect = aboutMe.getBoundingClientRect();
//     if(docRect.top <= 1.2*docRect.height){
//         $("#aboutMe .left").animate
//     }
// });


// Show more Work:
let showMoreBtn = document.querySelector("#showMoreBtn");
let projectsBtn = document.querySelector("#projectsBtn");

function showMore(){
    let allSections = document.querySelectorAll("main section");
    allSections.forEach(function(section){
        section.classList.toggle("hidden");
    })
}

showMoreBtn.addEventListener("click", showMore);
projectsBtn.addEventListener("click", showMore);

let closeShowMoreBtn = document.querySelector("#closeShowMoreBtn");
closeShowMoreBtn.addEventListener("click",function(e){
    let allSections = document.querySelectorAll("main section");
    allSections.forEach(function(section){
        section.classList.toggle("hidden");
    })
});