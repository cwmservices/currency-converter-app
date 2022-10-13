const input = document.querySelector('.input')
const output = document.querySelector('.output')
const tds = document.querySelectorAll('td'); 
const inputCurrency = document.querySelector('#inputCurrency');
const outputCurrency = document.querySelector('#outputCurrency');
let inputCurrencyValue = inputCurrency.value;
let outputCurrencyValue = outputCurrency.value;
let inputBoxValue = input.value;

// giving bordertop effect to my input
input.addEventListener('click', () => {
    input.style.borderTop = "2px solid orangered"
    output.style.borderTop = "none"
})

// giving bordertop effect to my output
output.addEventListener('click', () => {
    output.style.borderTop = "2px solid orangered"
    input.style.borderTop = "none"
})

//input Currency value
inputCurrency.addEventListener('change',(e)=>{
    inputCurrencyValue = e.target.value;    
    currencyConversion();
})

//output Currency value
outputCurrency.addEventListener('change',(e)=>{
    outputCurrencyValue=e.target.value; 
    currencyConversion();
})

//selecting all the calculator buttons(td's)
for(let td of tds){
    td.addEventListener('click',(e)=>{
        takeInput(e.target.innerText)
    })
}

//function to manage input data.
function takeInput(inputValue){
    switch(inputValue){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if(input.value == "0"){
                input.value = "";    
            }
            if(input.value.length >= 7){
                input.style.fontSize = "35px"
            }
            if(input.value.length >= 14){
                break;
            }
            if(output.value.length >= 7){
                output.style.fontSize = "35px"
            }
            if(output.value.length >= 14){
                break;
            }
            input.value = input.value + inputValue;
            inputBoxValue = input.value;
            currencyConversion();
            break;
        case 'CE':
            input.value = "0";
            output.value = "0"
            input.style.fontSize = "70px"
            output.style.fontSize = "70px"
            break;
        case 'X':
    }
}


function currencyConversion(){
    console.log("inputCur:"+inputCurrencyValue+"  "+"outputCur:"+outputCurrencyValue+"  "+"Input:"+inputBoxValue)
    
    dollarToPkrCalc = inputBoxValue * 200;
    dollarToRyadhCalc = inputBoxValue * 100;
    dollarToEuroCalc = inputBoxValue * 10;

    RyadhToPkrCalc = inputBoxValue * 150;
    RyadhToDollarCalc = inputBoxValue * 40;
    RyadhToEuroCalc = inputBoxValue * 30;

    EuroToPkrCalc = inputBoxValue * 240;
    EuroToRyadhCalc = inputBoxValue * 150;
    EuroToDollarCalc = inputBoxValue * 10;
    
    
    if(inputCurrencyValue=="Ryadh" && outputCurrencyValue == "Ryadh" || inputCurrencyValue=="Rupees" && outputCurrencyValue == "Rupees" || inputCurrencyValue=="Dollars" && outputCurrencyValue == "Dollars" || inputCurrencyValue=="Euro" && outputCurrencyValue == "Euro"){
        output.value = "0"
        output.value = inputBoxValue;    
    }
    if(inputCurrencyValue=="Dollars" && outputCurrencyValue == "Rupees" || inputCurrencyValue=="Rupees" && outputCurrencyValue == "Dollars"){
        output.value = "0"
        output.value = dollarToPkrCalc;    
    }
    if(inputCurrencyValue=="Dollars" && outputCurrencyValue == "Ryadh" || inputCurrencyValue=="Ryadh" && outputCurrencyValue == "Dollars"){
        output.value = "0"
        output.value = dollarToRyadhCalc;    
    }
    if(inputCurrencyValue=="Dollars" && outputCurrencyValue == "Euro" || inputCurrencyValue=="Euro" && outputCurrencyValue == "Dollars"){
        output.value = "0"
        output.value = dollarToEuroCalc;    
    }

    if(inputCurrencyValue=="Euro" && outputCurrencyValue == "Rupees" || inputCurrencyValue=="Rupees" && outputCurrencyValue == "Euro"){
        output.value = "0"
        output.value = EuroToPkrCalc;    
    }
    if(inputCurrencyValue=="Euro" && outputCurrencyValue == "Dollars" || inputCurrencyValue=="Dollars" && outputCurrencyValue == "Euro"){
        output.value = "0"
        output.value = EuroToDollarCalc;    
    }
    if(inputCurrencyValue=="Euro" && outputCurrencyValue == "Ryadh" || inputCurrencyValue=="Ryadh" && outputCurrencyValue == "Euro"){
        output.value = "0"
        output.value = EuroToRyadhCalc;    
    }

    if(inputCurrencyValue=="Ryadh" && outputCurrencyValue == "Rupees" || inputCurrencyValue=="Rupees" && outputCurrencyValue == "Ryadh"){
        output.value = "0"
        output.value = RyadhToPkrCalc;    
    }
    if(inputCurrencyValue=="Ryadh" && outputCurrencyValue == "Dollars" || inputCurrencyValue=="Dollars" && outputCurrencyValue == "Ryadh"){
        output.value = "0"
        output.value = RyadhToDollarCalc;    
    }
    if(inputCurrencyValue=="Ryadh" && outputCurrencyValue == "Euro" || inputCurrencyValue=="Euro" && outputCurrencyValue == "Ryadh"){
        output.value = "0"
        output.value = RyadhToEuroCalc;    
    }

}

currencyConversion();