
wizard = {
	name:"Wizard",
	space:4,
	maxLevel:6,
	trainTime:480,
	trainCost:[ 1500, 2000, 2500, 3000, 3500, 4000],
	imgSrc:[
		"./images/Wizard/Wizard1_2.png",
		"./images/Wizard/Wizard1_2.png",
		"./images/Wizard/Wizard3_4.png",
		"./images/Wizard/Wizard3_4.png",
		"./images/Wizard/Wizard5.png",
		"./images/Wizard/Wizard6.png"
	]
};

function initial_Wizard()
{
	var input = document.getElementById("Wizard_level");

	input.min = 1;
	input.max = wizard.maxLevel;
	input.value = 5;
}


function change_Wizard_level()
{
	var img = document.getElementById("Wizard_img");
	var input = document.getElementById("Wizard_level");
	var cost = document.getElementById("Wizard_cost");
	var idx = input.value-1;
	
	img.src= wizard.imgSrc[idx];
	cost.innerHTML = wizard.trainCost[idx];
		
	update_cost_unit_and_elixir();
}