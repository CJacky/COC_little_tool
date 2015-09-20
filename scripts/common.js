
troops = [ barbarian, archer, giant, goblin, wallBreaker, balloon, wizard, healer, dragon, PEKKA];

function update_max_army_unit()
{
	var a_idx = document.getElementById("ArmyCampA_level").value-1;
	var b_idx = document.getElementById("ArmyCampB_level").value-1;
	var c_idx = document.getElementById("ArmyCampC_level").value-1;
	var d_idx = document.getElementById("ArmyCampD_level").value-1;
	
	var max_capacity = armyCamp.capacity[a_idx]+
					   armyCamp.capacity[b_idx]+
					   armyCamp.capacity[c_idx]+
					   armyCamp.capacity[d_idx];

	document.getElementById("max_capacity").innerHTML = max_capacity;
	check_over_max_capacity();
}

function update_cost_unit_and_elixir()
{	
	var elem_total_cost = document.getElementById("total_cost");
	var elem_total_unit = document.getElementById("total_unit");
	
	var total_cost = 0;
	var total_unit = 0;

	for(var i=0; i<10; i++)
	{	
		var idx = document.getElementById(troops[i].name+"_level").value-1;
		var num = document.getElementById(troops[i].name+"_num").value;
		
		total_cost += troops[i].trainCost[idx] * num;
		total_unit += troops[i].space * num;
	}
	
	elem_total_cost.innerHTML = total_cost;
	elem_total_unit.innerHTML = total_unit;
	
	check_over_max_capacity();
}

function check_over_max_capacity()
{
	var total_unit    = document.getElementById("total_unit");
	var max_capacity  = document.getElementById("max_capacity");
	
	if( Number(total_unit.innerHTML) > Number(max_capacity.innerHTML) )
	{
		total_unit.style.color = "red";
	}
	else
	{
		total_unit.style.color = "yellow";
	}
}

function calculate()
{
	alert(barbarian.trainCost[6]);
}

























