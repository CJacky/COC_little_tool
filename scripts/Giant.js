
 giant = {
	name:"Giant",
	space:5,
	maxLevel:7,
	trainTime:120,
	trainCost:[ 250, 750, 1250, 1750, 2250, 3000, 3500 ],
	imgSrc:[
		"./images/Giant/Giant1_2.png",
		"./images/Giant/Giant1_2.png",
		"./images/Giant/Giant3_4.png",
		"./images/Giant/Giant3_4.png",
		"./images/Giant/Giant5.png",
		"./images/Giant/Giant6.png",
		"./images/Giant/Giant7.png"
	]
};

function initial_Giant()
{	
	var input = document.getElementById("Giant_level");

	input.min = 1;
	input.max = barbarian.maxLevel;
	input.value = 5;
}

function change_Giant_level()
{
	var img = document.getElementById("Giant_img");
	var input = document.getElementById("Giant_level");
	var cost = document.getElementById("Giant_cost");
	var idx = input.value-1;
	
	img.src= giant.imgSrc[idx];
	cost.innerHTML = giant.trainCost[idx];
		
	update_cost_unit_and_elixir();
}