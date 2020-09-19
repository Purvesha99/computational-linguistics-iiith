function select(sel){
			var corp_id=corp.options[corp.selectedIndex].value;
			if(corp_id=="null"){
				alert("Select a corpus");
				return false;
			}
			if(corp_id=="corp1"){
				select2e.style.display="block";				
			}
			if(corp_id=="corp2"){
				select2h.style.display="block";
			}
		}

function check(){
	if(a==ans){
		document.getElementById("ri_wr").innerHTML="<img src=\"right.png\">";
	}
	else{
		document.getElementById("ri_wr").innerHTML="<img src=\"right.png\">";
	}
}
