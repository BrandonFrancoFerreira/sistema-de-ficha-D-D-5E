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

        var cum = document.getElementById('cum');
        var cdois = document.getElementById('cdois');
        var ctres = document.getElementById('ctres');
        var cquatro = document.getElementById('cquatro');
        var ccinco = document.getElementById('ccinco');
        var cseis = document.getElementById('cseis');
        var csete = document.getElementById('csete');
        var coito = document.getElementById('coito');
        var cnove = document.getElementById('cnove');
        var cdez = document.getElementById('cdez');
        var conze = document.getElementById('conze');
        var cdoze = document.getElementById('cdoze');

        var rum = document.getElementById('rum');
        var rdois = document.getElementById('rdois');
        var rtres = document.getElementById('rtres');
        var rquatro = document.getElementById('rquatro');
        var rcinco = document.getElementById('rcinco');
        var rseis = document.getElementById('rseis');
        var rsete = document.getElementById('rsete');
        var roito = document.getElementById('roito');
        var rnove = document.getElementById('rnove');


        
             
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

var select = document.getElementById('classe');
select.addEventListener('change', function() {
    var nclasse = Number(classe.options[classe.selectedIndex].value);
    if(nclasse == 1){

         rum.style.backgroundColor = "green" 
         rdois.style.backgroundColor = "red"  
         rtres.style.backgroundColor = "red"  
         rquatro.style.backgroundColor = "green"  
         rcinco.style.backgroundColor = "green"  
         rseis.style.backgroundColor = "red"  
         rsete.style.backgroundColor = "red"  
         roito.style.backgroundColor = "green"  
         rnove.style.backgroundColor = "red"  
           

    }else if(nclasse == 2 ) {
        rum.style.backgroundColor = "red" 
         rdois.style.backgroundColor = "red"  
         rtres.style.backgroundColor = "green"  
         rquatro.style.backgroundColor = "green"  
         rcinco.style.backgroundColor = "green"  
         rseis.style.backgroundColor = "red"  
         rsete.style.backgroundColor = "red"  
         roito.style.backgroundColor = "red"  
         rnove.style.backgroundColor = "green"  
        
    }
})


   
    
})
