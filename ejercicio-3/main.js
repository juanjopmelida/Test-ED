function formatDate(input){
    document.getElementById("responseDate").textContent="";
    if (input.value.length && !isNaN(Date.parse(input.value))){
      let initDate=new Date(input.value);

      
      console.log(initDate);
      let formatDate=(initDate.getFullYear().toString() + 
        (initDate.getMonth()+1).toString() + 
        initDate.getDate().toString());

      document.getElementById("responseDate").textContent=formatDate;
    }
    else document.getElementById("responseDate").textContent="No es una fecha"
}