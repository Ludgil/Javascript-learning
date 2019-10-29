/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let output = document.getElementById("target");
    let part_one = document.getElementById("part-one").getAttribute("data-min");
    let part_two = document.getElementById("part-two").getAttribute("data-min");
    let part_three = document.getElementById("part-three").getAttribute("data-min");
    let part_four = document.getElementById("part-four").getAttribute("data-min");
    document.getElementById("part-one").addEventListener("click", ()=>{
        part_one++;
        if(part_one>document.getElementById("part-one").getAttribute("data-max")){
            part_one=document.getElementById("part-one").getAttribute("data-min");
        }

        if(part_one<10){
            part_one="0"+part_one;
        }
        output.innerHTML="+"+part_one+part_two+part_three+part_four;

    });
    document.getElementById("part-two").addEventListener("click", ()=>{

        part_two++;
        if(part_two>document.getElementById("part-two").getAttribute("data-max")){
            part_two=document.getElementById("part-two").getAttribute("data-min");
        }
        if(part_two<10){
            part_two="0"+part_two;
        }
        output.innerHTML="+"+part_one+part_two+part_three+part_four;
    });
    document.getElementById("part-three").addEventListener("click", ()=>{

        part_three++;
        if(part_three>document.getElementById("part-three").getAttribute("data-max")){
            part_three=document.getElementById("part-three").getAttribute("data-min");
        }
        if(part_three<10){
            part_three="0"+part_three;
        }
        output.innerHTML="+"+part_one+part_two+part_three+part_four;
    });
    document.getElementById("part-four").addEventListener("click", ()=>{

        part_four++;
        if(part_four>document.getElementById("part-four").getAttribute("data-max")){
            part_four=document.getElementById("part-four").getAttribute("data-min");
        }
        if(part_four<10){
            part_four="0"+part_four;
        }
        output.innerHTML="+"+part_one+part_two+part_three+part_four;
    });



})();
