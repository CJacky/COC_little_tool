
Troops = ["Barbarian", "Archer", "Giant", "Goblin", "WallBreaker", "Balloon", "Wizard", "Healer", "Dragon", "PEKKA"];

function update_max_army_unit()
{
	var ArmyCampA_level = document.getElementById("ArmyCampA_level");
	var ArmyCampB_level = document.getElementById("ArmyCampB_level");
	var ArmyCampC_level = document.getElementById("ArmyCampC_level");
	var ArmyCampD_level = document.getElementById("ArmyCampD_level");
	
	var max_train_unit = Number(ArmyCampA_level.options[ArmyCampA_level.selectedIndex].value) + 
						 Number(ArmyCampB_level.options[ArmyCampB_level.selectedIndex].value) + 
						 Number(ArmyCampC_level.options[ArmyCampC_level.selectedIndex].value) + 
						 Number(ArmyCampD_level.options[ArmyCampD_level.selectedIndex].value);

	document.getElementById("max_army_unit").innerHTML = max_train_unit;
}

function get_cost_unit()
{	
	var elem_total_cost = document.getElementById("total_cost");
	var elem_total_unit = document.getElementById("total_unit");
	
	var total_cost = 0;
	var total_unit = 0;

	for(var i=0; i<10; i++)
	{	
		var cost = document.getElementById(Troops[i]+"_cost").innerHTML;
		var num  = document.getElementById(Troops[i]+"_num").value;
		var unit = document.getElementById(Troops[i]+"_unit").innerHTML;
		
		total_cost += cost * num;
		total_unit += unit * num;
	}
	
	if( total_unit > document.getElementById("max_army_unit").innerHTML )
	{
		elem_total_unit.style.color = "red";
	}
	else
	{
		elem_total_unit.style.color = "yellow";
	}
	
	elem_total_cost.innerHTML = total_cost;
	elem_total_unit.innerHTML = total_unit;
}

function change_Barracks_level(id)
{
	var img = document.getElementById("Barracks"+id+"_img");
	var select = document.getElementById("Barracks"+id+"_level");
	
	document.getElementById("Barracks"+id+"_unit").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  img.src="./images/Barracks/Barracks1.png";  break;
		case "2":  img.src="./images/Barracks/Barracks2.png";  break;
		case "3":  img.src="./images/Barracks/Barracks3.png";  break;
		case "4":  img.src="./images/Barracks/Barracks4.png";  break;
		case "5":  img.src="./images/Barracks/Barracks5.png";  break;
		case "6":  img.src="./images/Barracks/Barracks6.png";  break;
		case "7":  img.src="./images/Barracks/Barracks7.png";  break;
		case "8":  img.src="./images/Barracks/Barracks8.png";  break;
		case "9":  img.src="./images/Barracks/Barracks9.png";  break;
		case "10": img.src="./images/Barracks/Barracks10.png"; break;	
	}
}

function change_ArmyCamp_level(id)
{
	var img = document.getElementById("ArmyCamp"+id+"_img");
	var select = document.getElementById("ArmyCamp"+id+"_level");
	
	document.getElementById("ArmyCamp"+id+"_unit").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  img.src="./images/ArmyCamp/ArmyCamp1.png";  break;
		case "2":  img.src="./images/ArmyCamp/ArmyCamp2.png";  break;
		case "3":  img.src="./images/ArmyCamp/ArmyCamp3.png";  break;
		case "4":  img.src="./images/ArmyCamp/ArmyCamp4.png";  break;
		case "5":  img.src="./images/ArmyCamp/ArmyCamp5.png";  break;
		case "6":  img.src="./images/ArmyCamp/ArmyCamp6.png";  break;
		case "7":  img.src="./images/ArmyCamp/ArmyCamp7.png";  break;
		case "8":  img.src="./images/ArmyCamp/ArmyCamp8.png";  break;
	}
	update_max_army_unit();
}


function change_Barbarian_level()
{
	var img = document.getElementById("Barbarian_img");
	var select = document.getElementById("Barbarian_level");
	
	document.getElementById("Barbarian_cost").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  
		case "2":  img.src="./images/Barbarian/Barbarian1_2.png";  break;
		case "3":  
		case "4":  img.src="./images/Barbarian/Barbarian3_4.png";  break;
		case "5":  img.src="./images/Barbarian/Barbarian5.png";  break;
		case "6":  img.src="./images/Barbarian/Barbarian6.png";  break;
		case "7":  img.src="./images/Barbarian/Barbarian7.png";  break;	
	}	
}

function change_Archer_level()
{
	var img = document.getElementById("Archer_img");
	var select = document.getElementById("Archer_level");
	
	document.getElementById("Archer_cost").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  
		case "2":  img.src="./images/Archer/Archer1_2.png";  break;
		case "3":  
		case "4":  img.src="./images/Archer/Archer3_4.png";  break;
		case "5":  img.src="./images/Archer/Archer5.png";  break;
		case "6":  img.src="./images/Archer/Archer6.png";  break;
		case "7":  img.src="./images/Archer/Archer7.png";  break;	
	}
}

function change_Giant_level()
{
	var img = document.getElementById("Giant_img");
	var select = document.getElementById("Giant_level");
	
	document.getElementById("Giant_cost").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  
		case "2":  img.src="./images/Giant/Giant1_2.png";  break;
		case "3":  
		case "4":  img.src="./images/Giant/Giant3_4.png";  break;
		case "5":  img.src="./images/Giant/Giant5.png";  break;
		case "6":  img.src="./images/Giant/Giant6.png";  break;
		case "7":  img.src="./images/Giant/Giant7.png";  break;	
	}	
}

function change_Goblin_level()
{
	var img = document.getElementById("Goblin_img");
	var select = document.getElementById("Goblin_level");
	
	document.getElementById("Goblin_cost").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  
		case "2":  img.src="./images/Goblin/Goblin1_2.png";  break;
		case "3":  
		case "4":  img.src="./images/Goblin/Goblin3_4.png";  break;
		case "5":  img.src="./images/Goblin/Goblin5.png";  break;
		case "6":  img.src="./images/Goblin/Goblin6.png";  break;
	}	
}

function change_WallBreaker_level()
{
	var img = document.getElementById("WallBreaker_img");
	var select = document.getElementById("WallBreaker_level");
	
	document.getElementById("WallBreaker_cost").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  
		case "2":  img.src="./images/WallBreaker/WallBreaker1_2.png";  break;
		case "3":  
		case "4":  img.src="./images/WallBreaker/WallBreaker3_4.png";  break;
		case "5":  img.src="./images/WallBreaker/WallBreaker5.png";  break;
		case "6":  img.src="./images/WallBreaker/WallBreaker6.png";  break;
	}		
}

function change_Balloon_level()
{
	var img = document.getElementById("Balloon_img");
	var select = document.getElementById("Balloon_level");
	
	document.getElementById("Balloon_cost").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  
		case "2":  img.src="./images/Balloon/Balloon1_2.png";  break;
		case "3":  
		case "4":  img.src="./images/Balloon/Balloon3_4.png";  break;
		case "5":  img.src="./images/Balloon/Balloon5.png";  break;
		case "6":  img.src="./images/Balloon/Balloon6.png";  break;
	}	
}

function change_Wizard_level()
{
	var img = document.getElementById("Wizard_img");
	var select = document.getElementById("Wizard_level");
	
	document.getElementById("Wizard_cost").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  
		case "2":  img.src="./images/Wizard/Wizard1_2.png";  break;
		case "3":  
		case "4":  img.src="./images/Wizard/Wizard3_4.png";  break;
		case "5":  img.src="./images/Wizard/Wizard5.png";  break;
		case "6":  img.src="./images/Wizard/Wizard6.png";  break;
	}	
}

function change_Healer_level()
{
	var img = document.getElementById("Healer_img");
	var select = document.getElementById("Healer_level");
	
	document.getElementById("Healer_cost").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  
		case "2":  img.src="./images/Healer/Healer1_2.png";  break;
		case "3":  
		case "4":  img.src="./images/Healer/Healer3_4.png";  break;
	}		
}

function change_Dragon_level()
{
	var img = document.getElementById("Dragon_img");
	var select = document.getElementById("Dragon_level");
	
	document.getElementById("Dragon_cost").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  img.src="./images/Dragon/Dragon1.png";  break;
		case "2":  img.src="./images/Dragon/Dragon2.png";  break;
		case "3":  img.src="./images/Dragon/Dragon3.png";  break;
		case "4":  img.src="./images/Dragon/Dragon4.png";  break;
		case "5":  img.src="./images/Dragon/Dragon5.png";  break;
		case "6":  img.src="./images/Dragon/Dragon6.png";  break;
	}	
}

function change_PEKKA_level()
{
	var img = document.getElementById("PEKKA_img");
	var select = document.getElementById("PEKKA_level");
	
	document.getElementById("PEKKA_cost").innerHTML = select.options[select.selectedIndex].value;
	
	switch(select.options[select.selectedIndex].text)
	{
		case "1":  img.src="./images/PEKKA/PEKKA1.png";  break;
		case "2":  img.src="./images/PEKKA/PEKKA2.png";  break;
		case "3":  img.src="./images/PEKKA/PEKKA3.png";  break;
		case "4":  img.src="./images/PEKKA/PEKKA4.png";  break;
		case "5":  img.src="./images/PEKKA/PEKKA5.png";  break;
	}	
}







