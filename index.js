
Troops = ["Barbarian", "Archer", "Giant", "Goblin", "WallBreaker", "Balloon", "Wizard", "Healer", "Dragon", "PEKKA"];

function update_max_army_unit()
{
	var ArmyCampA_unit = document.getElementById("ArmyCampA_unit");
	var ArmyCampB_unit = document.getElementById("ArmyCampB_unit");
	var ArmyCampC_unit = document.getElementById("ArmyCampC_unit");
	var ArmyCampD_unit = document.getElementById("ArmyCampD_unit");
	
	var max_train_unit = Number(ArmyCampA_unit.innerHTML) + 
						 Number(ArmyCampB_unit.innerHTML) + 
						 Number(ArmyCampC_unit.innerHTML) + 
						 Number(ArmyCampD_unit.innerHTML);

	document.getElementById("max_army_unit").innerHTML = max_train_unit;
}

function update_cost_unit_and_elixir()
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

function calculate()
{
	alert("still building...");
}

function change_Barracks_level(id)
{
	var img = document.getElementById("Barracks"+id+"_img");
	var input = document.getElementById("Barracks"+id+"_level");
	var unit = document.getElementById("Barracks"+id+"_unit");
	
	switch(input.value)
	{
		case "1":  
			img.src="./images/Barracks/Barracks1.png";  
			unit.innerHTML = "20";
			break;
		case "2":  
			img.src="./images/Barracks/Barracks2.png";  
			unit.innerHTML = "25";
			break;
		case "3":  
			img.src="./images/Barracks/Barracks3.png";  
			unit.innerHTML = "30";
			break;
		case "4":  
			img.src="./images/Barracks/Barracks4.png";  
			unit.innerHTML = "35";
			break;
		case "5":  
			img.src="./images/Barracks/Barracks5.png";  
			unit.innerHTML = "40";
			break;
		case "6":  
			img.src="./images/Barracks/Barracks6.png";  
			unit.innerHTML = "45";
			break;
		case "7":  
			img.src="./images/Barracks/Barracks7.png";  
			unit.innerHTML = "50";
			break;
		case "8":  
			img.src="./images/Barracks/Barracks8.png";  
			unit.innerHTML = "55";
			break;
		case "9":  
			img.src="./images/Barracks/Barracks9.png";  
			unit.innerHTML = "60";
			break;
		case "10": 
			img.src="./images/Barracks/Barracks10.png"; 
			unit.innerHTML = "75";
			break;	
	}
}

function change_ArmyCamp_level(id)
{
	var img = document.getElementById("ArmyCamp"+id+"_img");
	var input = document.getElementById("ArmyCamp"+id+"_level");
	var unit = document.getElementById("ArmyCamp"+id+"_unit");
	
	switch(input.value)
	{
		case "1":  
			img.src="./images/ArmyCamp/ArmyCamp1.png";  
			unit.innerHTML = "20";
			break;
		case "2":  
			img.src="./images/ArmyCamp/ArmyCamp2.png";  
			unit.innerHTML = "30";
			break;
		case "3":  
			img.src="./images/ArmyCamp/ArmyCamp3.png";  
			unit.innerHTML = "35";
			break;
		case "4":  
			img.src="./images/ArmyCamp/ArmyCamp4.png";  
			unit.innerHTML = "40";
			break;
		case "5":  
			img.src="./images/ArmyCamp/ArmyCamp5.png";  
			unit.innerHTML = "45";
			break;
		case "6":  
			img.src="./images/ArmyCamp/ArmyCamp6.png";  
			unit.innerHTML = "50";
			break;
		case "7":  
			img.src="./images/ArmyCamp/ArmyCamp7.png";  
			unit.innerHTML = "55";
			break;
		case "8":  
			img.src="./images/ArmyCamp/ArmyCamp8.png";  
			unit.innerHTML = "60";
			break;
	}
	update_max_army_unit();
}


function change_Barbarian_level()
{
	var img = document.getElementById("Barbarian_img");
	var input = document.getElementById("Barbarian_level");
	var cost = document.getElementById("Barbarian_cost");
		
	switch(input.value)
	{
		case "1":  
			img.src="./images/Barbarian/Barbarian1_2.png";  
			cost.innerHTML = "25";
			break;
		case "2":  
			img.src="./images/Barbarian/Barbarian1_2.png";  
			cost.innerHTML = "40";
			break;
		case "3":  
			img.src="./images/Barbarian/Barbarian3_4.png";  
			cost.innerHTML = "60";
			break;
		case "4":  
			img.src="./images/Barbarian/Barbarian3_4.png";  
			cost.innerHTML = "100";
			break;
		case "5":  
			img.src="./images/Barbarian/Barbarian5.png";  
			cost.innerHTML = "150";
			break;
		case "6":  
			img.src="./images/Barbarian/Barbarian6.png";  
			cost.innerHTML = "200";
			break;
		case "7":  
			img.src="./images/Barbarian/Barbarian7.png"; 
			cost.innerHTML = "250";
			break;	
	}	
	update_cost_unit_and_elixir();
}

function change_Archer_level()
{
	var img = document.getElementById("Archer_img");
	var input = document.getElementById("Archer_level");
	var cost = document.getElementById("Archer_cost");
		
	switch(input.value)
	{
		case "1":  
			img.src="./images/Archer/Archer1_2.png";  
			cost.innerHTML = "50";
			break;
		case "2":  
			img.src="./images/Archer/Archer1_2.png";  
			cost.innerHTML = "80";
			break;
		case "3":  
			img.src="./images/Archer/Archer3_4.png";  
			cost.innerHTML = "120";
			break;
		case "4":  
			img.src="./images/Archer/Archer3_4.png";  
			cost.innerHTML = "200";
			break;
		case "5":  
			img.src="./images/Archer/Archer5.png";  
			cost.innerHTML = "300";
			break;
		case "6":  
			img.src="./images/Archer/Archer6.png";  
			cost.innerHTML = "400";
			break;
		case "7":  
			img.src="./images/Archer/Archer7.png";  
			cost.innerHTML = "500";
			break;	
	}
	update_cost_unit_and_elixir();
}

function change_Giant_level()
{
	var img = document.getElementById("Giant_img");
	var input = document.getElementById("Giant_level");
	var cost = document.getElementById("Giant_cost");
	
	switch(input.value)
	{
		case "1":  
			img.src="./images/Giant/Giant1_2.png";  
			cost.innerHTML = "250";
			break;
		case "2":  
			img.src="./images/Giant/Giant1_2.png";  
			cost.innerHTML = "750";
			break;
		case "3":  
			img.src="./images/Giant/Giant3_4.png";  
			cost.innerHTML = "1250";
			break;
		case "4":  
			img.src="./images/Giant/Giant3_4.png";  
			cost.innerHTML = "1750";
			break;
		case "5":  
			img.src="./images/Giant/Giant5.png";  
			cost.innerHTML = "2250";
			break;
		case "6":  
			img.src="./images/Giant/Giant6.png";  
			cost.innerHTML = "3000";
			break;
		case "7":  
			img.src="./images/Giant/Giant7.png";  
			cost.innerHTML = "3500";
			break;	
	}	
	update_cost_unit_and_elixir();
}

function change_Goblin_level()
{
	var img = document.getElementById("Goblin_img");
	var input = document.getElementById("Goblin_level");
	var cost = document.getElementById("Goblin_cost");
	
	switch(input.value)
	{
		case "1":  
			img.src="./images/Goblin/Goblin1_2.png"; 
			cost.innerHTML = "25";
			break;
		case "2":  
			img.src="./images/Goblin/Goblin1_2.png";  
			cost.innerHTML = "40";
			break;
		case "3":  
			img.src="./images/Goblin/Goblin3_4.png";  
			cost.innerHTML = "60";
			break;
		case "4":  
			img.src="./images/Goblin/Goblin3_4.png";  
			cost.innerHTML = "80";
			break;
		case "5":  
			img.src="./images/Goblin/Goblin5.png";  
			cost.innerHTML = "100";
			break;
		case "6":  
			img.src="./images/Goblin/Goblin6.png";  
			cost.innerHTML = "150";
			break;
	}
	update_cost_unit_and_elixir();
}

function change_WallBreaker_level()
{
	var img = document.getElementById("WallBreaker_img");
	var input = document.getElementById("WallBreaker_level");
	var cost = document.getElementById("WallBreaker_cost");
	
	switch(input.value)
	{
		case "1":  
			img.src="./images/WallBreaker/WallBreaker1_2.png";  
			cost.innerHTML = "1000";
			break;
		case "2":  
			img.src="./images/WallBreaker/WallBreaker1_2.png";  
			cost.innerHTML = "1500";
			break;
		case "3":  
			img.src="./images/WallBreaker/WallBreaker3_4.png";  
			cost.innerHTML = "2000";
			break;
		case "4":  
			img.src="./images/WallBreaker/WallBreaker3_4.png";  
			cost.innerHTML = "2500";
			break;
		case "5":  
			img.src="./images/WallBreaker/WallBreaker5.png";  
			cost.innerHTML = "3000";
			break;
		case "6":  
			img.src="./images/WallBreaker/WallBreaker6.png";  
			cost.innerHTML = "3500";
			break;
	}		
	update_cost_unit_and_elixir();
}

function change_Balloon_level()
{
	var img = document.getElementById("Balloon_img");
	var input = document.getElementById("Balloon_level");
	var cost = document.getElementById("Balloon_cost");
	
	switch(input.value)
	{
		case "1":  
			img.src="./images/Balloon/Balloon1_2.png";  
			cost.innerHTML = "2000";
			break;
		case "2":  
			img.src="./images/Balloon/Balloon1_2.png";  
			cost.innerHTML = "2500";
			break;
		case "3":  
			img.src="./images/Balloon/Balloon3_4.png";  
			cost.innerHTML = "3000";
			break;
		case "4":  
			img.src="./images/Balloon/Balloon3_4.png";  
			cost.innerHTML = "3500";
			break;
		case "5":  
			img.src="./images/Balloon/Balloon5.png";  
			cost.innerHTML = "4000";
			break;
		case "6":  
			img.src="./images/Balloon/Balloon6.png";  
			cost.innerHTML = "4500";
			break;
	}	
	update_cost_unit_and_elixir();
}

function change_Wizard_level()
{
	var img = document.getElementById("Wizard_img");
	var input = document.getElementById("Wizard_level");
	var cost = document.getElementById("Wizard_cost");
	
	switch(input.value)
	{
		case "1":  
			img.src="./images/Wizard/Wizard1_2.png";  
			cost.innerHTML = "1500";
			break;
		case "2":  
			img.src="./images/Wizard/Wizard1_2.png";
			cost.innerHTML = "2000";
			break;
		case "3":  
			img.src="./images/Wizard/Wizard3_4.png";  
			cost.innerHTML = "2500";
			break;
		case "4":  
			img.src="./images/Wizard/Wizard3_4.png";  
			cost.innerHTML = "3000";
			break;
		case "5":  
			img.src="./images/Wizard/Wizard5.png";  
			cost.innerHTML = "3500";
			break;
		case "6":  
			img.src="./images/Wizard/Wizard6.png";  
			cost.innerHTML = "4000";
			break;
	}
	update_cost_unit_and_elixir();
}

function change_Healer_level()
{
	var img = document.getElementById("Healer_img");
	var input = document.getElementById("Healer_level");
	var cost = document.getElementById("Healer_cost");
	
	switch(input.value)
	{
		case "1":  
			img.src="./images/Healer/Healer1_2.png";  
			cost.innerHTML = "5000";
			break;
		case "2":  
			img.src="./images/Healer/Healer1_2.png";  
			cost.innerHTML = "6000";
			break;
		case "3":  
			img.src="./images/Healer/Healer3_4.png";  
			cost.innerHTML = "8000";
			break;
		case "4":  
			img.src="./images/Healer/Healer3_4.png";  
			cost.innerHTML = "10000";
			break;
	}	
	update_cost_unit_and_elixir();
}

function change_Dragon_level()
{
	var img = document.getElementById("Dragon_img");
	var input = document.getElementById("Dragon_level");
	var cost = document.getElementById("Dragon_cost");
	
	switch(input.value)
	{
		case "1":  
			img.src="./images/Dragon/Dragon1.png";
			cost.innerHTML = "25000";
			break;
		case "2":  
			img.src="./images/Dragon/Dragon2.png";  
			cost.innerHTML = "29000";
			break;
		case "3":  
			img.src="./images/Dragon/Dragon3.png";  
			cost.innerHTML = "33000";
			break;
		case "4":  
			img.src="./images/Dragon/Dragon4.png";  
			cost.innerHTML = "37000";
			break;
		case "5":  
			img.src="./images/Dragon/Dragon5.png";  
			cost.innerHTML = "42000";
			break;
	}
	update_cost_unit_and_elixir();
}

function change_PEKKA_level()
{
	var img = document.getElementById("PEKKA_img");
	var input = document.getElementById("PEKKA_level");
	var cost = document.getElementById("PEKKA_cost");
	
	switch(input.value)
	{
		case "1":  
			img.src="./images/PEKKA/PEKKA1.png";  
			cost.innerHTML = "28000";
			break;
		case "2":  
			img.src="./images/PEKKA/PEKKA2.png";  
			cost.innerHTML = "32000";
			break;
		case "3":  
			img.src="./images/PEKKA/PEKKA3.png";  
			cost.innerHTML = "36000";
			break;
		case "4":  
			img.src="./images/PEKKA/PEKKA4.png";  
			cost.innerHTML = "40000";
			break;
		case "5":  
			img.src="./images/PEKKA/PEKKA5.png";  
			cost.innerHTML = "45000";
			break;
	}	
	update_cost_unit_and_elixir();
}







