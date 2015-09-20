
 wallBreaker = {
	name:"WallBreaker",
	space:2,
	maxLevel:6,
	trainTime:120,
	trainCost:[ 1000, 1500, 2000, 2500, 3000, 3500],
	imgSrc:[
		"./images/WallBreaker/WallBreaker1_2.png",
		"./images/WallBreaker/WallBreaker1_2.png",
		"./images/WallBreaker/WallBreaker3_4.png",
		"./images/WallBreaker/WallBreaker3_4.png",
		"./images/WallBreaker/WallBreaker5.png",
		"./images/WallBreaker/WallBreaker6.png"
	]
};

function initial_WallBreaker()
{
	var input = document.getElementById("WallBreaker_level");

	input.min = 1;
	input.max = wallBreaker.maxLevel;
	input.value = 5;
}

function change_WallBreaker_level()
{
	var img = document.getElementById("WallBreaker_img");
	var input = document.getElementById("WallBreaker_level");
	var cost = document.getElementById("WallBreaker_cost");
	var idx = input.value-1;
	
	img.src= wallBreaker.imgSrc[idx];
	cost.innerHTML = wallBreaker.trainCost[idx];
		
	update_cost_unit_and_elixir();
}