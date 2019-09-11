/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

while (true) {
    let age = prompt("Quel age as-tu ?");
    let sex = prompt("Es-tu un homme ou une femme ?");
    let ville = prompt("Dans quelle ville habites-tu ?");
    let conf = confirm("Tu es un/une "+sex+ " de " +age+" ans "+"vivant à " +ville+ "        oui/non ?");

    if (conf) {
        break;
    }

}
})();
