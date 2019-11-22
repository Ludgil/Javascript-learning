(() => {

    let hover_1=document.getElementsByClassName("hoverMe")[0];
    let hover_2=document.getElementsByClassName("hoverMe")[1];
    let hover_3=document.getElementsByClassName("hoverMe")[2];

    document.getElementsByClassName("hoverMe")[0].addEventListener("mouseenter", ()=>{
         hover_1.style.display="none"

    });
    document.getElementsByClassName("hoverMe")[1].addEventListener("mouseenter", ()=>{
         hover_2.style.display="none"

    });
    document.getElementsByClassName("hoverMe")[2].addEventListener("mouseenter", ()=>{
         hover_3.style.display="none"

    });

    document.getElementsByClassName("reset")[0].addEventListener("click", ()=>{
        hover_1.style.display=""
        hover_2.style.display=""
        hover_3.style.display=""
    });

})();
