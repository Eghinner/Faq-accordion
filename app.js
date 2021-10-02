var quest = document.querySelectorAll(".quest");
var paraph = document.querySelectorAll("p");
var arrow = document.querySelectorAll(".arrow");

for(let i in quest){
	quest[i].addEventListener("click", () => {
		paraph[i]	.classList.toggle("mystyle");		
		arrow[i]	.classList.toggle("rotate");
		quest[i]	.classList.toggle("black");
		for(let o in quest){
			if (quest[o] == quest[i]) {
				continue;
			} else {
				paraph[o].classList.remove("mystyle");
				arrow[o].classList.remove("rotate");
				quest[o].classList.remove("black");
			}	
		}
	});
}