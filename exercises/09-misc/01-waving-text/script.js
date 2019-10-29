/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const wave=Array.from(document.getElementById("target").textContent);
    const size=["12px", "14px", "16px", "18px", "20px"];
    document.getElementById("target").innerHTML=null;

    for(let i=0;i<wave.length;i++){
        let span = document.createElement("span");
        document.getElementById("target").appendChild(span).innerHTML=wave[i];
    }
    let count=0;
    for(let j=1;j<wave.length;j++){
        document.getElementsByTagName("span")[j].style.fontSize=size[count];
        count++;
        if(count>=5){
            count=0;
        }
    }

})();
