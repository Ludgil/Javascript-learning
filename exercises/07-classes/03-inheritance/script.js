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

    class dog extends Animal{
      constructor(name){
        super();
        this.name=name;
      }
      static greeting="hello";

    }

    class cat extends Animal{
      constructor(name){
        super();
        this.name=name;
      }
      static greeting="hello";

    }

    document.getElementById("run").addEventListener("click", ()=>{
      const a_cat=new cat("Kitty");
      const a_dog=new dog("Doggo");


      console.log(a_cat.sayHello()+" "+a_dog.sayHello());
    });



})();
