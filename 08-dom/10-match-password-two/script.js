/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () =>{

        let mdp = document.getElementById("pass-one").value;
        let mdpTwo = document.getElementById("pass-two").value;

        console.log(mdp, mdpTwo); 

        if (mdp == mdpTwo){
            console.log("les mdp sont égaux");
            
        }
        else {
            document.getElementById("pass-one").classList.add("error");
            document.getElementById("pass-two").classList.add("error");
        }
        

    })
})();
