 
 var totalProduction=[]
 var totalLitres;
function shedsProduction() {
    let litres = document.getElementById('litres').value;
    let production = totalProduction.push(litres) 
    totalLitres = totalProduction.reduce((a, b)=>(a+b), 0) 
  }

  function totalProduction(production){
    return production.reduce()
  }
  var sellingPrice = document.getElementById('price').value;
  var time = document.getElementById('time').value;

  function incomeoverTime(sellingPrice, time){
    let totalEarning= totalLitres*sellingPrice*time
    return totalEarning;
  }