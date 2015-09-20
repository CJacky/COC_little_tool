
 PEKKA = {
	name:"PEKKA",
	space:25,
	maxLevel:5,
	trainTime:2700,
	trainCost:[ 28000, 32000, 36000, 40000, 45000],
	imgSrc:[
		"./images/PEKKA/PEKKA1.png",
		"./images/PEKKA/PEKKA2.png",
		"./images/PEKKA/PEKKA3.png",
		"./images/PEKKA/PEKKA4.png",
		"./images/PEKKA/PEKKA5.png"
	]
};

function initial_PEKKA()
{	
	var input = document.getElementById("PEKKA_level");

	input.min = 1;
	input.max = PEKKA.maxLevel;
	input.value = 2;
}

function change_PEKKA_level()
{
	var img = document.getElementById("PEKKA_img");
	var input = document.getElementById("PEKKA_level");
	var cost = document.getElementById("PEKKA_cost");
	var idx = input.value-1;
	
	img.src= PEKKA.imgSrc[idx];
	cost.innerHTML = PEKKA.trainCost[idx];
		
	update_cost_unit_and_elixir();
}