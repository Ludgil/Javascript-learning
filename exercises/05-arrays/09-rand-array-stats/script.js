/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function generaterandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
}

function minimum(nb){
  let min=100;
  for(i=0;i<nb.length;i++){
    if(nb[i]<min){
      min=nb[i];
    }
  }
  return min;
}

function maximum(nb){
  let max=0;
  for(i=0;i<nb.length;i++){
    if(nb[i]>max){
      max=nb[i];
    }
  }
  return max;
}

function sum(nb){
  let sum=0;
  for(i=0;i<nb.length;i++){
    sum+=nb[i];
  }
  return sum;
}

function average(nb){
  let sum=0;
  let average=0;
  for(i=0;i<nb.length;i++){
    sum+=nb[i];
  }
  average=sum/nb.length;

  return average.toFixed(2);

}

document.getElementById("run").addEventListener("click", ()=>{

  let Numbers=[];

  for(i=0;i<10;i++){
    Numbers[i]=generaterandom(1,100);
    for(j=0;j<10;j++){
      if(Numbers[i]==Number[j]){
        Numbers[j]=generaterandom(1,100);
        }
      }
  }

   document.getElementById("n-1").innerHTML= Numbers[0]
   document.getElementById("n-2").innerHTML=Numbers[1]
   document.getElementById("n-3").innerHTML=Numbers[2]
   document.getElementById("n-4").innerHTML=Numbers[3]
   document.getElementById("n-5").innerHTML=Numbers[4]
   document.getElementById("n-6").innerHTML=Numbers[5]
   document.getElementById("n-7").innerHTML=Numbers[6]
   document.getElementById("n-8").innerHTML=Numbers[7]
   document.getElementById("n-9").innerHTML=Numbers[8]
   document.getElementById("n-10").innerHTML=Numbers[9]



   document.getElementById("min").innerHTML= minimum(Numbers);
   document.getElementById("max").innerHTML= maximum(Numbers);
   document.getElementById("sum").innerHTML= sum(Numbers);
   document.getElementById("average").innerHTML= average(Numbers);



})


})();
