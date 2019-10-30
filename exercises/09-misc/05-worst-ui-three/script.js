/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {

// let output = document.getElementById("target");
// let input_1 = document.getElementById("part-one");
// let input_2 = document.getElementById("part-two");
// let input_3 = document.getElementById("part-three");
// let input_4 = document.getElementById("part-four");
//
// function casino(check, btn, input){
//   let on_time=true;
//   let valeur = document.getElementById(check).getAttribute("value");
//   let valeur_max=document.getElementById(check).getAttribute("data-max");
//   let valeur_min=document.getElementById(check).getAttribute("data-min");
//
//   let interval = setInterval(function(){
//       valeur++;
//       if(valeur > valeur_max){
//           valeur = valeur_min;
//       }
//
//       console.log(valeur);
//
//
//       // document.getElementById(btn).addEventListener("click", ()=>{
//       //
//       //     if(on_time==true){
//       //     on_time=false;
//       //     clearInterval(interval);
//       //     }
//       //
//       //     else{
//       //         on_time=true;
//       //         setInterval(interval);
//       //     }
//       //
//       // });
//       input.value=valeur;
//   }, 100);
//
// }
//
// casino("part-one", "fix-part-one", input_1);
// casino("part-two", "fix-part-two", input_2);
// casino("part-three", "fix-part-three", input_3);
// casino("part-four", "fix-part-four", input_4);

let result = document.getElementById("target");
    result.textContent="";


let go = (link, btn) => {
        let on_time=true;
        let check = document.getElementById(link);
        let test = check.value;
        let max = check.dataset.max;
        let min = check.dataset.min;
        let interval = setInterval(() => {
            if(test >= max){
                test = min;
            }
        
            test++;
            document.getElementById(link).value = test;
        }, 500);

        document.getElementById(btn).addEventListener("click", ()=>{

            if(on_time==true){
                 on_time=false;
                 clearInterval(interval);


            }

            else{
                on_time=true;
                go(link, btn);
            }

        });

}


    go("part-one","fix-part-one");
    go("part-two","fix-part-two");
    go("part-three","fix-part-three");
    go("part-four","fix-part-four");

    for(i=0;i<4;i++){
        let span = document.createElement("span");
        result.append(span);
    }

    document.getElementById("fix-part-one").addEventListener("click", ()=>{

            document.getElementsByTagName("span")[1].innerHTML="+"+document.getElementById("part-one").value;
        });
    document.getElementById("fix-part-two").addEventListener("click", ()=>{

        document.getElementsByTagName("span")[2].innerHTML=document.getElementById("part-two").value;
        });
    document.getElementById("fix-part-three").addEventListener("click", ()=>{

            document.getElementsByTagName("span")[3].innerHTML=document.getElementById("part-three").value;
        });
    document.getElementById("fix-part-four").addEventListener("click", ()=>{

            document.getElementsByTagName("span")[4].innerHTML=document.getElementById("part-four").value;
        });



})();
