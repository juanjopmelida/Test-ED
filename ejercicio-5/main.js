function formatNum(input){
    document.getElementById("finalNum").textContent="";
    if (input.value.length && !isNaN(input.value)){
      let num=input.value.trim();    
      let arrNum=Array.from(num);     
      let finalArrNum=arrNum.map(function(x) { return parseInt(x); });
      let finalStrNum=finalArrNum.sort(function(a, b){return b-a});          
      let f=parseInt(finalStrNum.join().replace(/,/g,''));

      document.getElementById("finalNum").textContent=f;
    }
    else document.getElementById("finalNum").textContent="Número no válido"
}