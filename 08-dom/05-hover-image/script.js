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
    // your code here

    let hoverstyle = document.querySelector("img").getAttribute("data-hover");// je chope la valeur de data hover avec query
    
    let sourcestyle = document.querySelector("img").getAttribute("src");// je chope la valeur de src avec query selector

    console.log(hoverstyle);

    document.querySelector("img").addEventListener("mouseover", () =>{ 
        document.querySelector("img").setAttribute("src", hoverstyle);
    } )
    //j'utilise l'event listener mouseover et changer sa src par hoverstyle

    document.querySelector("img").addEventListener("mouseout", () =>{
        document.querySelector("img").setAttribute("src", sourcestyle);
    } )
    // j'utilise l'event listener mouseout pour remettre sourcestyle comme src 


})();
