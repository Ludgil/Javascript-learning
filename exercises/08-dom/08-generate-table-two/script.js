/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

  let div_target = document.getElementById("target");
  let table = document.createElement("table");
  div_target.appendChild(table);


  let test=0;
  for(let j=0;j<11;j++){
    tr= document.createElement("tr");
    table.appendChild(tr);

    for(let i=0;i<10;i++){
      td= document.createElement("td");
      tr.appendChild(td);
      if(j==0){
        document.getElementsByTagName("td")[test].innerHTML="table de "+(i+1)
      }
      else {
        document.getElementsByTagName("td")[test].innerHTML=(i+1)*j;
        console.log(test);
      }
      test++;


    }
  }

  //---------------------------------------------------------------------------
  // rempli la premiere ligne par le numero de la table

  // for(k=1;k<=10;k++){
  //   document.getElementsByTagName("td")[k-1].innerHTML="table de "+k
  // }

//--------------------------------------------------------------------------
// calcule la table de multiplication
//   let l=10;
//   let number=1;
//   let multiplicateur=1;
//   while(l<110){
//
//     if(l==20){
//       number=2;
//       multiplicateur=2;
//     }
//     if(l==30){
//       number=3;
//       multiplicateur=3;
//     }
//     if(l==40){
//       number=4;
//       multiplicateur=4;
//     }
//     if(l==50){
//       number=5;
//       multiplicateur=5;
//     }
//     if(l==60){
//       number=6;
//       multiplicateur=6;
//     }
//     if(l==70){
//       number=7;
//       multiplicateur=7;
//     }
//     if(l==80){
//       number=8;
//       multiplicateur=8;
//     }
//     if(l==90){
//       number=9;
//       multiplicateur=9;
//     }
//     if(l==100){
//       number=10;
//       multiplicateur=10;
//     }
//
//     document.getElementsByTagName("td")[l].innerHTML=number;
//     l++;
//     number+=multiplicateur;
// //  number+=number;
//
//     console.log(number);
//   }



})();
