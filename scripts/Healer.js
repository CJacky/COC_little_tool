
 healer = {
	name:"Healer",
	space:14,
	maxLevel:4,
	trainTime:900,
	trainCost:[ 5000, 6000, 8000, 10000],
	imgSrc:[
	"./images/Healer/Healer1_2.png",
	"./images/Healer/Healer1_2.png",
	"./images/Healer/Healer3_4.png",
	"./images/Healer/Healer3_4.png"
	]
};

function initial_Healer()
{
	var input = document.getElementById("Healer_level");

	input.min = 1;
	input.max = healer.maxLevel;
	input.value = 3;
}


function change_Healer_level()
{
	var img = document.getElementById("Healer_img");
	var input = document.getElementById("Healer_level");
	var cost = document.getElementById("Healer_cost");
	var idx = input.value-1;
	
	img.src= healer.imgSrc[idx];
	cost.innerHTML = healer.trainCost[idx];
		
	update_cost_unit_and_elixir();
}