/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",() =>{


        let random = [];

        for(i = 1 ; i <12 ; i++) {
            let number = Math.floor( Math.random() * 100 );
            random.push(number);
            document.getElementById("n-"+i).innerHTML = number;
            }
        console.log(array);
        //creation array de 10 elements avec random de 1 a 100 dedans
        let mini= Math.min.apply(null, random);
        document.getElementById("min").innerHTML = mini;

        let max = Math.max.apply(null, random);
        document.getElementById("max").innerHTML = max;
        
        let sum = random.reduce((a, b) => a + b, )
        document.getElementById("sum").innerHTML = sum;

        let moyen = sum/random.length;
        document.getElementById("average").innerHTML = moyen;


        // ca me soule j'y reviendrais apres
        



    })

})();
