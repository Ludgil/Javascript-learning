/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let data_Image=document.getElementById("source").getAttribute("data-image");
    let img=document.createElement("img");
    img.src=data_Image;
    document.getElementById("target").appendChild(img);
    let remove_source=document.getElementById("source");
    remove_source.remove();


})();
