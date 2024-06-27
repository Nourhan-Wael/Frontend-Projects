img=document.getElementById("theme")
page=document.getElementById("page")
div=document.getElementById("div").children
console.log(div)
function changeMode(){
	if(img.getAttribute("src")=="images/sun.png"){
		img.setAttribute("src","images/icon-park--moon.png")
		page.classList.add("day")
		for(i=0;i<3;i++){
			div[i].classList.remove("dark")
			div[i].classList.add("light")
		}
	}
	else if(img.getAttribute("src")=="images/icon-park--moon.png"){
		img.setAttribute("src","images/sun.png")
		page.classList.remove("day")
		for(i=0;i<3;i++){
			div[i].classList.add("dark")
			div[i].classList.remove("light")
		}
	}
}