
 goblin = {
	name:"Goblin",
	space:1,
	maxLevel:6,
	trainTime:30,
	trainCost:[ 25, 40, 60, 80, 100, 150 ],
	imgSrc:[
		"./images/Goblin/Goblin1_2.png",
		"./images/Goblin/Goblin1_2.png",
		"./images/Goblin/Goblin3_4.png",
		"./images/Goblin/Goblin3_4.png",
		"./images/Goblin/Goblin5.png",
		"./images/Goblin/Goblin6.png"
	]
};

function initial_Goblin()
{
	var input = document.getElementById("Goblin_level");

	input.min = 1;
	input.max = goblin.maxLevel;
	input.value = 5;	
}

function change_Goblin_level()
{
	var img = document.getElementById("Goblin_img");
	var input = document.getElementById("Goblin_level");
	var cost = document.getElementById("Goblin_cost");
	var idx = input.value-1;
	
	img.src= goblin.imgSrc[idx];
	cost.innerHTML = goblin.trainCost[idx];
		
	update_cost_unit_and_elixir();
}