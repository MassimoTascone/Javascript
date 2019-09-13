/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click" ,() =>{

        let year = document.getElementById("year").value;
        let arrayAnne = [];
        for (i=0; i<=11; i++){
            let annee = new Date(year, i, 13);
            // Grace a une loop j'ai recup tous les 13 du mois
            console.log(annee);
            let day = annee.getDay();
            if (day == 5) {
                arrayAnne.push(annee);
            }
            
        }
        alert(arrayAnne);

    })


})();
