
var paraph = document.querySelectorAll("p");
var quest = document.querySelectorAll(".quest");
var arrow = document.querySelectorAll(".arrow");

for(let i in quest){
	quest[i].addEventListener("click", () => {
		paraph[i]	.classList.toggle("mystyle");
		arrow[i]	.classList.toggle("rotate");
		quest[i]	.classList.toggle("black");
	});
}