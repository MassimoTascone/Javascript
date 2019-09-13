/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () =>{
        // Date d'anniversaire
        let day = parseInt(document.getElementById("dob-day").value);
        let month = parseInt(document.getElementById("dob-month").value);
        let year = parseInt(document.getElementById("dob-year").value);

        console.log(day , month , year);

        let today = new Date();
        // Date d'aujourd'hui 

        let todayDay = parseInt(today.getDay());
        let todayMonth = parseInt(today.getMonth()+1);
        let todayYear = parseInt(today.getFullYear());

        let age = todayYear - year;
        

        if (month > todayMonth) {
            age = age -1;
            // age -- ou age -= 1;
        }

        else if (month === todayMonth){
            if (todayDay < day){
                age = age -1;
            }
        }

        alert(age);















    })
    


})();
