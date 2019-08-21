// GETS THE HISTORY VALUE AND SETS IT
function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText = num;
}

// GETS OUTPUT VALUE AND SETS IT
function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    document.getElementById("output-value").innerText = num;
}

// OPERATORS
var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        // --------------------------------------------------------------
        if(this.id == "clear"){   // CLEAR BUTTON FUNCTIONALITY
            printHistory("");
            printOutput("");
        }
        // --------------------------------------------------------------
        else if(this.id == "backspace"){  // BACKSPACE BUTTON FUNCTIONALITY
            var output = getOutput().toString();
            if(output){ // if output has value
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        }
        // ---------------------------------------------------------------
        else{   // ANY OTHER BUTTON
            var output = getOutput();
            var history = getHistory();
            if(output == "" && history != ""){
                if(isNaN(history[history.length - 1])){
                    history = history.substr(0, history.length - 1);
                }
            }
            if(output != "" || history != ""){   // if there is output
                // condition?true:false
                output = output == ""?
                output:output;
                history = history + output;
                if(this.id == "="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

// NUMBERS
var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        var output = getOutput();   // GETS THE OUTPUT
        if(output != NaN){  // CHECKS IF IT IS A NUMBER
            output = output + this.id; // ADDS NUMBER TO OUTPUT
            printOutput(output);
        }
    });
}