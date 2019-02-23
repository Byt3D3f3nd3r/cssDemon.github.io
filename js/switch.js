function toggleSwitch(){
		if(document.getElementById('ggs-switch') )
		{
			var dId = 'ggs-switch';
			/*document.getElementById('gridlet').style.visibility = 'visible';*/
			/*document.body.style.background = "url('http://www.baselineme.com/23') center top repeat";*/
		}
		else{

			var dId = 'ggs-switch-animated';
			/*document.getElementById('gridlet').style.visibility = 'hidden';
			document.body.style.background = "none";*/
		}
		var ggs = document.getElementById(dId);
		
		var attr = ggs.getAttribute('id');
		//alert(attr);
	attr = (attr == 'ggs-switch') ? 'ggs-switch-animated' : 'ggs-switch';
	
	ggs.setAttribute('id',attr);
}


function prepareSwitches()
{
	var ggSwitch = document.getElementById('ggs-switch');
	
	ggSwitch.onclick = function(){
		toggleSwitch();
	};
}

