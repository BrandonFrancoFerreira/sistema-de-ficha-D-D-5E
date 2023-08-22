$(function(){

    document.getElementById('sla').onclick = function(){
        var classe = document.getElementById('classe');
        var suaclasse = (classe.options[classe.selectedIndex].text);
        var raca = document.getElementById('raca');
        var suaraca = (raca.options[raca.selectedIndex].text);
        var nclasse = Number(classe.options[classe.selectedIndex].value);
        var nraca = Number(raca.options[raca.selectedIndex].value);
        var escolha1 = document.getElementById('escolhaclasse');
        var escolha2 = document.getElementById('escolharaca');
        
             
        if(nclasse == 0 && nraca == 0){
            alert("escolha uma classe e uma raça")
        }
        else if (nclasse == 0){
            alert("escolha uma classe")
        }else if (nraca == 0){
            alert('escolha uma raça');
        }else{
            escolha1.innerHTML = suaclasse
            escolha2.innerHTML = suaraca
            escolha1.style.display ="block"
            escolha2.style.display ="block" 
        }
            

    


}


   
    
})
