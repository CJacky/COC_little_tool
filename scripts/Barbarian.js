
barbarian = {
	name:"Barbarian",
	space:1,
	maxLevel:7,
	trainTime:20,
	trainCost:[ 25, 40, 60, 100, 150, 200, 250 ],
	imgSrc:[
		"./images/Barbarian/Barbarian1_2.png",
		"./images/Barbarian/Barbarian1_2.png",
		"./images/Barbarian/Barbarian3_4.png",
		"./images/Barbarian/Barbarian3_4.png",
		"./images/Barbarian/Barbarian5.png",
		"./images/Barbarian/Barbarian6.png",
		"./images/Barbarian/Barbarian7.png"
	]
};

function initial_Barbarian()
{	
	var input = document.getElementById("Barbarian_level");

	input.min = 1;
	input.max = barbarian.maxLevel;
	input.value = 5;
}

function change_Barbarian_level()
{
	var img = document.getElementById("Barbarian_img");
	var input = document.getElementById("Barbarian_level");
	var cost = document.getElementById("Barbarian_cost");
	var idx = input.value-1;
	
	img.src= barbarian.imgSrc[idx];
	cost.innerHTML = barbarian.trainCost[idx];
		
	update_cost_unit_and_elixir();
}