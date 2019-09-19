/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let target = document.getElementById("target");// je fais une variable avec ma target
    let table = document.createElement("table"); // creation table

    let ligne;
    let col;
    for (i=1 ; i < 11; i++){ // loop pour créer 10 lignes
        let ligne = document.createElement("tr");
        table.appendChild(ligne);


        for( let k= 1 ; k<11; k++){ // loop pour créer 10 col
            let col = document.createElement("td");
            ligne.appendChild(col);
            let text = document.createTextNode([i]*[k]);
            col.appendChild(text);

        }
    }

    target.appendChild(table);




})();
