function username(){/*Function to greet user*/
    var name = document.getElementById("username").value;
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    var inputs = [name,"time","game","expression"]
    if (name.includes("Time")){
        time();//calls time function
    }
    else if (name.includes("Game")){
        window.open("game.html","_self"); //opens game.html file to play game
    }
    else if (name.includes("Expression")){
        Evaluate(name.slice(11)); //sends the expression to evaluate an expression
    }
    else{
        document.getElementById("greet").innerHTML = `Hey ${name} Glad to meet you!`;
        document.getElementById("menu").innerHTML = `<br> -> I can perform these operations : <br><br>->Time : Enter "time" to know TIME <br><br>-> Evaluate: To evaluate give an expression in the below format<br> "expression:1+1" <br><br>->GAME: Enter "game" to play a GAME<br>`//menu
    }
}
function time() {/* Function to display time when requested by user*/
    var currentTime = new Date() // gives current time
    var hours = currentTime.getHours() //gives the hours
    var minutes = currentTime.getMinutes() //gives the minutes
    var seconds = currentTime.getSeconds() //gives the seconds
    if (minutes < 10)
    minutes = "0" + minutes
    if (seconds < 10)
    seconds = "0" + seconds
    document.getElementById("in").innerHTML = `Time is ${hours} : ${minutes} : ${seconds}` // tells us the time 
}
function Evaluate(exp) {
  /* Function to evaluate the expression given by the user*/
    try{
        var solution = eval(exp);
        document.getElementById("in").innerHTML = `Solution is : ${solution}`; //tells us the solution for the given expression
    }
    catch {
        document.getElementById("in").innerHTML = `Enter a Valid Expression`; //warns us if we give an invalid expression
    }
}
var user=0,bot=0
var items = ['ROCK','PAPER','SCISSORS'];
function choice(value){
  /* Fuuntion for game*/
    var botchoice = items[Math.floor(Math.random() * items.length)]; 
    document.getElementById("choose").innerHTML = `${value} : ${botchoice}` //provides the selected output of user and bot
    if (value == 'ROCK'){
        if (botchoice == 'PAPER'){
            bot = bot + 1;
        }
        if (botchoice == 'SCISSORS'){
            user = user + 1;
        }
    }
    if (value == 'PAPER'){
        if (botchoice == 'SCISSORS'){
            bot = bot + 1;
        }
        if (botchoice == 'ROCK'){
            user = user + 1;
        }
    }
    if (value == 'SCISSORS'){
        if (botchoice == 'ROCK'){
            bot = bot + 1;
        }
        if (botchoice == 'PAPER'){
            user = user + 1;
        }
    }
    document.getElementById("game").innerHTML = `${user} : ${bot}` //scores of user and bot
}
