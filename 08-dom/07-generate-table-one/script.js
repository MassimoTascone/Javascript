/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let target = document.getElementById("target");
    let superTable = document.createElement("table"); // creation table
    let superTd;

    let superTr;
    for (let i = 0; i < 10; i++){
        let superTr= document.createElement("tr");
        superTable.appendChild(superTr);
        let superTd= document.createElement("td");
        superTr.appendChild(superTd);
        let txt = document.createTextNode("je sais faire un tableau");
        superTd.appendChild(txt);


        console.log(superTd);

    }
    
    target.appendChild(superTable);




})();
