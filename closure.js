var func = (function(){
    
        var name = "Inhiyha";
        var getName = function(){
            return name;
        }
        var greaterThan = function(n){
            return function(m){
                return m>n;
            }
        }
        return {
            getLowerCaseName : function(){
                var name = getName();
                return name.toLowerCase();
            },
            getGreaterThan : function(){
                return greaterThan(10);
            }
        }
   
})() 

console.log(func);
var greaterThan10 = func.getGreaterThan(10);
var greaterThan20 = func.getGreaterThan(20);
console.log(greaterThan10(2));
