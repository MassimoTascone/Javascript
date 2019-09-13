/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    // let date = new Date();
    // let year = date.getFullYear();
    // let day = date.getDay();
    // let month = parseInt(date.getMonth());
    // let hour = date.getHours();
    // let min = date.getMinutes();

    // let arrayMonth = ["janvier","février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    // let MonthLetter = arrayMonth[month];
    // console.log(MonthLetter);

    // document.getElementById("target").innerHTML = day+" "+" "+MonthLetter+" "+year+ " , "+hour+ "h"+min;

    let date = new Date();
    let options =  { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute:'numeric'};
    document.getElementById("target").innerHTML =(date.toLocaleDateString('fr-FR', options ));



})();
