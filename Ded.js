function sla(){
    document.getElementById('sla').onclick = function(){
    clas = document.getElementById('classe')
    raca = document.getElementById('raca')
   
    document.getElementById("escolha").innerHTML = `seu personagem é um ${raca.options[raca.selectedIndex].text} da classe ${clas.options[clas.selectedIndex].text}`
    escolha = document.getElementById('escolha')
    

    escolha.style.display ="block"
   
    /*alert(`a raca é ${raca.options[raca.selectedIndex].text} e a classe é  ${clas.options[clas.selectedIndex].text}`)*/

    


}


   
    
}