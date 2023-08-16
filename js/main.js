let menu=document.querySelector(".nav-icon");
let closeNavbar=document.querySelector(".close-nav");
let btnAbout=document.querySelector('.btn-about');
let home=document.querySelector('.home')
let about=document.querySelector('.about')
let btncontant=document.querySelector(".contant-me")
let contantWork=document.querySelector(".contant-work")
let portifolio=document.querySelector(".portifolio")
let btnPortf=document.querySelector(".btn-portf")
let projDetails=document.querySelector(".proj-details")
let closeDetails=document.querySelector(".close-details")
let navHome=document.querySelector(".nav-home")
let navAbout=document.querySelector(".nav-about")
let navPorti=document.querySelector(".nav-porti")
let navContact=document.querySelector(".nav-contact")

navHome.addEventListener('click',function(){
    home.classList.remove('hidden')
     about.classList.add('hidden')
    portifolio.classList.add('hidden')
    contantWork.classList.add('hidden')
    document.querySelector('.navbar').classList.remove("active");
})

navAbout.addEventListener('click',function(){
    home.classList.add('hidden')
     about.classList.remove('hidden')
    portifolio.classList.add('hidden')
    contantWork.classList.add('hidden')
    document.querySelector('.navbar').classList.remove("active");
})

btnAbout.addEventListener('click',function(){
    home.classList.add('hidden')
     about.classList.remove('hidden')
    portifolio.classList.add('hidden')
    contantWork.classList.add('hidden')
    document.querySelector('.navbar').classList.remove("active");
})

navPorti.addEventListener('click',function(){
    home.classList.add('hidden')
     about.classList.add('hidden')
    portifolio.classList.remove('hidden')
    contantWork.classList.add('hidden')
    document.querySelector('.navbar').classList.remove("active");
})
btnPortf.addEventListener('click',function(){
    home.classList.add('hidden')
     about.classList.add('hidden')
    portifolio.classList.remove('hidden')
    contantWork.classList.add('hidden')
    document.querySelector('.navbar').classList.remove("active");
})


navContact.addEventListener('click',function(){
    home.classList.add('hidden')
     about.classList.add('hidden')
    portifolio.classList.add('hidden')
    contantWork.classList.remove('hidden')
    document.querySelector('.navbar').classList.remove("active");
})
btncontant.addEventListener('click',function(){
    home.classList.add('hidden')
     about.classList.add('hidden')
    portifolio.classList.add('hidden')
    contantWork.classList.remove('hidden')
    document.querySelector('.navbar').classList.remove("active");
})

let viewPro=document.querySelectorAll(".view-Prj");
menu.addEventListener('click',function(){
    document.querySelector('.navbar').classList.add("active");
})

closeNavbar.addEventListener("click",function(){
    document.querySelector('.navbar').classList.remove("active");

})


for (let i = 0; i< viewPro.length; i++) {
viewPro[i].addEventListener('click',function(e){
    projDetails.classList.remove('hidden');
   let parent=e.target.parentElement;
let img=parent.querySelector("img").getAttribute('src');
console.log(img);
let projName=parent.querySelector("h5").innerHTML;
let projDesc=parent.querySelector(".description").innerHTML;
let tech=parent.querySelector(".tech").innerHTML;
let detailsImg=document.querySelector('.details-image');
let projectLink=parent.querySelector('.project-link').getAttribute('href');
let projectDate=parent.querySelector('.project-date').innerHTML;

detailsImg.setAttribute('src',`../${img}`);
document.querySelector(".project-name").innerHTML=projName;
document.querySelector(".proj-desc").innerHTML=projDesc;
document.querySelector(".techs span").innerHTML=tech;
document.querySelector(".date span").innerHTML=projectDate;
document.querySelector(".view-demo").setAttribute('href',projectLink);
})
}

closeDetails.addEventListener('click',function(){
    projDetails.classList.add('hidden');

})