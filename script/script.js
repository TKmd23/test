let upbtn = document.querySelector(".up-button");
window.onscroll = function(){
	if(window.pageYOffset > 200){
		upbtn.classList.add("shown");
	} else {
		upbtn.classList.remove("shown");
	}
};

upbtn.addEventListener("click", function(){
	window.scrollTo(0,0);
});