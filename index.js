var offerBar = document.querySelector(".offerbar")

offerClose = document.getElementById("offer-close")
offerClose.addEventListener("click",function()
{
    offerBar.style.display="none"
})

var sidebarOpen =document.getElementById("sidebar-open")
var sidebar = document.querySelector(".sidebar")
sidebarOpen.addEventListener("click",function()
{
    sidebar.style.marginLeft="0%"
})

var sidebarClose = document.querySelector(".sidebar-close")
sidebarClose.addEventListener("click",function()
{
    sidebar.style.marginLeft = "-60%"
})


var like = document.querySelectorAll(".likebutton")

like.forEach(function(liked){
    liked.addEventListener("click",function(event){
        
        if(event.target.src.indexOf("heart")>0)
        {
            event.target.src="./images/redheart.png"
        }
        else{
            event.target.src="./images/heart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    var elements = document.querySelectorAll(".scroll")
    elements.forEach(function(scroll){
        windowHeight = window.innerHeight
     var scrollbound = scroll.getBoundingClientRect()
     if(windowHeight>scrollbound.top-100){
    scroll.classList.remove("opac")

    }
    
})
    
})