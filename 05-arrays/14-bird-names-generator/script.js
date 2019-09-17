/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () =>{

        let n = Math.floor(Math.random() * birds.length);// genere le random number pour birds array 
        let adj = Array.from(adjectives); // changer le set en array 
        let x = Math.floor(Math.random() * adj.length);// genere le random number pour adj

        if (birds[n].fem) {
            document.getElementById("target").innerHTML = birds[n].name +" "+ adj[x]+"e";
        }

        else {
            document.getElementById("target").innerHTML = birds[n].name +" "+ adj[x];

        }




    })
})();
