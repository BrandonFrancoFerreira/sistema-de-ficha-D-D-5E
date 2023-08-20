    
    
    document.getElementById('sla').onclick = function(){
    var classe = document.getElementById('classe');
    console.log("a classe é " + classe.options[classe.selectedIndex].text);
    var raca = document.getElementById('raca');
    console.log("a raca é " + raca.options[raca.selectedIndex].text);

    document.getElementById("escolhaclasse").innerHTML = classe.options[classe.selectedIndex].text;
    document.getElementById("escolharaca").innerHTML = raca.options[raca.selectedIndex].text;
    

    var escolha1 = document.getElementById('escolhaclasse')
    var escolha2 = document.getElementById('escolharaca')

    escolha1.style.display ="block"
    escolha2.style.display ="block"