function sla(){
    document.getElementById('sla').onclick = function(){
    clas = document.getElementById('classe')
    raca = document.getElementById('raca')
   
    document.getElementById("escolhaclasse").innerHTML = `a raça do seu personagem é ${raca.options[raca.selectedIndex].text} e sua classe é  ${clas.options[clas.selectedIndex].text}`
    escolhac = document.getElementById('escolhaclasse')
    

    escolhac.style.display ="block"
    escolhar.style.display ="block"
    /*alert(`a raca é ${raca.options[raca.selectedIndex].text} e a classe é  ${clas.options[clas.selectedIndex].text}`)*/

    


}


   
    
}