/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    
    document.getElementById("run").addEventListener("click", () =>{

        class Cat extends Animal {
            constructor(name, greeting){
                super();
                this.name = name;
                Cat.greeting = greeting;
            }
        }
    
        class Dog extends Animal {
            constructor(name, greeting){
                super();
                this.name = name;
                Cat.greeting = greeting;
            }
        }


        let cat = new Cat ("Grego", "Salut mec");
        console.log(cat.sayHello());
        let dog = new Dog ("Doggy", "Ciao mec");
        console.log(dog.sayHello());



    })
})();
