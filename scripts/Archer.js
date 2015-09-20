
archer = {
	name:"Archer",
	space:1,
	maxLevel:7,
	trainTime:25,
	trainCost:[ 50, 80, 120, 200, 300, 400, 500 ],
	imgSrc:[
		"./images/Archer/Archer1_2.png",
		"./images/Archer/Archer1_2.png",
		"./images/Archer/Archer3_4.png",
		"./images/Archer/Archer3_4.png",
		"./images/Archer/Archer5.png",
		"./images/Archer/Archer6.png",
		"./images/Archer/Archer7.png"
	]
};

function initial_Archer()
{
	var input = document.getElementById("Archer_level");

	input.min = 1;
	input.max = archer.maxLevel;
	input.value = 5;
	
}

function change_Archer_level()
{
	var img = document.getElementById("Archer_img");
	var input = document.getElementById("Archer_level");
	var cost = document.getElementById("Archer_cost");
	var idx = input.value-1;
	
	img.src= archer.imgSrc[idx];
	cost.innerHTML = archer.trainCost[idx];
		
	update_cost_unit_and_elixir();
}