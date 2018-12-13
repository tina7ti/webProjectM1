var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



function quiz3()
{
	var qst1 = document.getElementsByName("qst1");
	var qst2 = document.getElementsByName("qst2");
	var qst3 = document.getElementsByName("qst3");
	var qst4 = document.getElementsByName("qst4");
	if ( (!qst1[0].checked && !qst1[1].checked && !qst1[2].checked) || (!qst2[0].checked && !qst2[1].checked && !qst2[2].checked) || (!qst3[0].checked && !qst3[1].checked && !qst3[2].checked) || (!qst4[0].checked && !qst4[1].checked)  )
	 {
	 	document.getElementById("dang").innerHTML = "Veuillez répondre à toutes les questions.";
	 	document.getElementById("dang").style.display = "block";
	 }
	 else
	 {
	 	var i = 0;
	 	if (qst1[1].checked) {
	 		i++;
	 	}else
	 	{
	 		if(qst1[0].checked) document.getElementById("s10").style.color = "red";
	 		else document.getElementById("s12").style.color = "red";
	 	}
	 	if (qst2[2].checked) {
	 		i++;
	 	}else
	 	{
	 		if(qst2[0].checked) document.getElementById("s20").style.color = "red";
	 		else document.getElementById("s21").style.color = "red";
	 	}
	 	if (qst3[0].checked) {
	 		i++;
	 	}else
	 	{
	 		if(qst3[1].checked) document.getElementById("s31").style.color = "red";
	 		else document.getElementById("s32").style.color = "red";
	 	}
	 	if (qst4[0].checked) {
	 		i++;
	 	}else
	 	{
	 		if(qst4[1].checked) document.getElementById("s41").style.color = "red";
	 	}
	 	document.getElementById("s11").style.color = "#30DC36";
	 	document.getElementById("s11").style.fontWeight = "bold";
	 	document.getElementById("s22").style.color = "#30DC36";
	 	document.getElementById("s22").style.fontWeight = "bold";
	 	document.getElementById("s30").style.color = "#30DC36";
	 	document.getElementById("s30").style.fontWeight = "bold";
	 	document.getElementById("s40").style.color = "#30DC36";
	 	document.getElementById("s40").style.fontWeight = "bold";

	 	document.getElementById("score").innerHTML = "Votre score est égal à "+i ;
	 	document.getElementById("score").style.display = "block";
	 }
}