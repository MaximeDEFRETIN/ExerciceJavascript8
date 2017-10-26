function form1(){
  var age = document.getElementById("age").value;
if(isNaN(age) == false && age > 0){
  if(age >= 18){
    alert("T'es majeur, mec !");
  }
  else{
    alert("T'es encore un gamin, fiston !");
  }}
  else{
    alert("Met ton âge !")
  }
}
