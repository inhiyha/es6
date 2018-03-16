var GreetingService = {};
GreetingService.init = function(){
    var elem = document.getElementById('msg');
    elem.innerHTML = "Hello world";
    addGreeting();
}
//GreetingService.init();

function Greeting(greet, name){
    this.greet = greet;
    this.name = name;
    this.getMessage = function(){
        return this.greet +" "+this.salutation +"."+this.name;
    }
return this;
}

(function addGreeting(){
  //  Greeting.prototype.salutation = 'Ms';
    var greeting1 = Greeting('hello','Inhiyha');
    var greeting2 = Greeting('hi','Inhiyha');
    
    console.log(greeting1.getMessage());

    // console.log(greeting2);

    var greetings = [greeting1, greeting2];
    greetings.forEach(function(greeting, index){
        console.log(greeting.greet );
    })
})();


