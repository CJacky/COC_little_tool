
barracks = {
	name:"Barracks",
	maxLevel:10,
	queueLength:[ 20, 25, 30, 35, 40, 45, 50, 55, 60, 75 ],
	imgSrc:[
		"./images/Barracks/Barracks1.png",
		"./images/Barracks/Barracks2.png",
		"./images/Barracks/Barracks3.png",
		"./images/Barracks/Barracks4.png",
		"./images/Barracks/Barracks5.png",
		"./images/Barracks/Barracks6.png",
		"./images/Barracks/Barracks7.png",
		"./images/Barracks/Barracks8.png",
		"./images/Barracks/Barracks9.png",
		"./images/Barracks/Barracks10.png"
	]
};

function initial_Barracks()
{
	var input = [];
	input[0] = document.getElementById("BarracksA_level");
	input[1] = document.getElementById("BarracksB_level");
	input[2] = document.getElementById("BarracksC_level");
	input[3] = document.getElementById("BarracksD_level");	
	
	for(var i=0; i<4; i++)
	{
		input[i].min = 1;
		input[i].max = barracks.maxLevel;
		input[i].value = 10;
	}	
}

function change_Barracks_level(id)
{
	var img = document.getElementById("Barracks"+id+"_img");
	var input = document.getElementById("Barracks"+id+"_level");
	var unit = document.getElementById("Barracks"+id+"_unit");
	var idx = input.value-1;
	
	img.src = barracks.imgSrc[idx];  
	unit.innerHTML = barracks.queueLength[idx];
}