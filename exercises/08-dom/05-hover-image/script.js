/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let data_hover=document.getElementsByTagName("img")[0].getAttribute("data-hover");
  let data_not_hover=document.getElementsByTagName("img")[0].getAttribute("src");

    document.getElementsByTagName("img")[0].addEventListener("mouseover", ()=>{
      document.getElementsByTagName("img")[0].src=data_hover;
      setTimeout(function() {
      document.getElementsByTagName("img")[0].src = document.getElementsByTagName("img")[0].src=data_not_hover;;
    }, 500);

    });






})();
