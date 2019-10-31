/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

        document.getElementById("run").addEventListener("click", async ()=>{

        let input_id = document.getElementById("hero-id").value;

        try {
            const response= await fetch("http://localhost:3000/heroes/"+input_id, {
                    method: "DELETE",
                    
            });
            const result = await response.json();
            console.log(result);
        }
        catch(error){
            console.log("error!!");
            console.error(error);
        }
    });

})();
