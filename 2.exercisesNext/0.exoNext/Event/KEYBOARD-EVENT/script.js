(() => {



    document.addEventListener("keydown", (e)=>{
         let keyPress=e.keyCode;
         let colorDiv = document.getElementById("character");
         let up=document.getElementById("up");
         let down=document.getElementById("down");
         let left=document.getElementById("left");
         let right=document.getElementById("right");

         console.log(keyPress);

         switch (keyPress) {
             case 96:
                colorDiv.style.backgroundColor="red";
                 break;
             case 97:
                colorDiv.style.backgroundColor="blue";
                 break;
             case 98:
                colorDiv.style.backgroundColor="yellow";
                 break;
             case 99:
                colorDiv.style.backgroundColor="purple";
                 break;
             case 100:
                colorDiv.style.backgroundColor="green";
                 break;
             case 101:
                colorDiv.style.backgroundColor="black";
                 break;
             case 102:
                colorDiv.style.backgroundColor="pink";
                 break;
             case 103:
                colorDiv.style.backgroundColor="brown";
                 break;
             case 104:
                colorDiv.style.backgroundColor="orange";
                 break;
            // ARROW
             case 38:
                up.classList.add("highlight");
                 break;
             case 40:
                down.classList.add("highlight");
                 break;
             case 37:
                left.classList.add("highlight");
                 break;
             case 39:
                right.classList.add("highlight");
                 break;

         }
    });


    document.addEventListener("keyup", (e)=>{
         let keyUp=e.keyCode;
         let up=document.getElementById("up");
         let down=document.getElementById("down");
         let left=document.getElementById("left");
         let right=document.getElementById("right");


         switch (keyUp) {

            // ARROW
             case 38:
                up.classList.remove("highlight");
                 break;
             case 40:
                down.classList.remove("highlight");
                 break;
             case 37:
                left.classList.remove("highlight");
                 break;
             case 39:
                right.classList.remove("highlight");
                 break;

         }
    });
















})();
