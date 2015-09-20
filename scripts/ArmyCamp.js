
armyCamp = {
	name:"ArmyCamp",
	maxLevel:8,
	capacity:[ 20, 30, 35, 40, 45, 50, 55, 60 ],
	imgSrc:[
		"./images/ArmyCamp/ArmyCamp1.png",
		"./images/ArmyCamp/ArmyCamp2.png",
		"./images/ArmyCamp/ArmyCamp3.png",
		"./images/ArmyCamp/ArmyCamp4.png",
		"./images/ArmyCamp/ArmyCamp5.png",
		"./images/ArmyCamp/ArmyCamp6.png",
		"./images/ArmyCamp/ArmyCamp7.png",
		"./images/ArmyCamp/ArmyCamp8.png"
	]
};

function initial_ArmyCamp()
{
	var input = [];
	input[0] = document.getElementById("ArmyCampA_level");
	input[1] = document.getElementById("ArmyCampB_level");
	input[2] = document.getElementById("ArmyCampC_level");
	input[3] = document.getElementById("ArmyCampD_level");	
	
	for(var i=0; i<4; i++)
	{
		input[i].min = 1;
		input[i].max = armyCamp.maxLevel;
		input[i].value = 7;
	}	
}

function change_ArmyCamp_level(id)
{
	var img = document.getElementById("ArmyCamp"+id+"_img");
	var input = document.getElementById("ArmyCamp"+id+"_level");
	var unit = document.getElementById("ArmyCamp"+id+"_unit");
	var idx = input.value-1;
	
	img.src = armyCamp.imgSrc[idx];  
	unit.innerHTML = armyCamp.capacity[idx];
	
	update_max_army_unit();
}