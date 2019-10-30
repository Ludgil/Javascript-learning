/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=>{

        window.lib.getPosts((error, articles) => {

            for(let i=0;i<articles.length;i++){
                let artid=articles[i].id;
                window.lib.getComments(artid,(error, comments)=>{
                    articles[i].comments=comments;
                });
            }
            console.log(articles);
        });



    });
})();
