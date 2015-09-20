
 dragon = {
	name:"Dragon",
	space:20,
	maxLevel:5,
	trainTime:1800,
	trainCost:[ 25000, 29000, 33000, 37000, 42000],
	imgSrc:[
		"./images/Dragon/Dragon1.png",
		"./images/Dragon/Dragon2.png",
		"./images/Dragon/Dragon3.png",
		"./images/Dragon/Dragon4.png",
		"./images/Dragon/Dragon5.png"
	]
};

function initial_Dragon()
{	
	var input = document.getElementById("Dragon_level");

	input.min = 1;
	input.max = dragon.maxLevel;
	input.value = 3;
}

function change_Dragon_level()
{
	var img = document.getElementById("Dragon_img");
	var input = document.getElementById("Dragon_level");
	var cost = document.getElementById("Dragon_cost");
	var idx = input.value-1;
	
	img.src= dragon.imgSrc[idx];
	cost.innerHTML = dragon.trainCost[idx];
		
	update_cost_unit_and_elixir();
}