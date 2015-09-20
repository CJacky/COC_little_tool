
balloon = {
	name:"Balloon",
	space:5,
	maxLevel:6,
	trainTime:480,
	trainCost:[ 2000, 2500, 3000, 3500, 4000, 4500],
	imgSrc:[
		"./images/Balloon/Balloon1_2.png",
		"./images/Balloon/Balloon1_2.png",
		"./images/Balloon/Balloon3_4.png",
		"./images/Balloon/Balloon3_4.png",
		"./images/Balloon/Balloon5.png",
		"./images/Balloon/Balloon6.png"
	]
};

function initial_Balloon()
{
	var input = document.getElementById("Balloon_level");

	input.min = 1;
	input.max = balloon.maxLevel;
	input.value = 5;
}


function change_Balloon_level()
{
	var img = document.getElementById("Balloon_img");
	var input = document.getElementById("Balloon_level");
	var cost = document.getElementById("Balloon_cost");
	var idx = input.value-1;
	
	img.src= balloon.imgSrc[idx];
	cost.innerHTML = balloon.trainCost[idx];
		
	update_cost_unit_and_elixir();
}