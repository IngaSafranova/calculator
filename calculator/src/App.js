/* eslint-disable no-eval */
import React,{useState} from 'react';


function App() {

  //set the initial value of the display to 0
const [input, setInput] = useState('0');
const [formula, setFormula] = useState('');
  const [overwrite, setOverwrite] = useState(false);
const [solved, setSolved] = useState(false);
  let number;
  let operator;
  //function for presing numbers
  function handleNumber(event){
    //will give us the value of the button
 number = event.target.textContent;
//if the current value is 0, we will replace it with the number
if (input === '0'){
setInput(number);
setFormula(number);
  } else {
    //else we will add the number to the current value
    setInput(  number);
    setFormula(formula + number );
  
  }
  if (solved === true){
    setInput(number);
    setFormula( number);
    setSolved(false);
    setOverwrite(false)
  }
}

  function handleOperator(event, number){

    let lastelement = formula.slice(-1);
    //console.log(lastelement);
   
    
    operator = event.target.textContent;

    if (solved === true){
      setInput(operator);
      setFormula(formula + operator);
      setSolved(false);
      setOverwrite(false)
    }
    if (input === '0' && formula === '') {

     if (operator === '-' && formula === ''){     
       setInput(operator);
      setFormula( formula + operator );
    }
 return
        } 
        // if ( formula.length===1 && formula.endsWith("-") && input !== number ){
        //   return}
          if (formula.endsWith("-") && input !== number ){
            return}
        setInput(operator);
           setFormula( formula + ' '+ operator  );
           
            
                    
                  

        if (formula.endsWith("+" ) && operator !== '-'){
          //console.log(lastelement);
          const Formula = formula.trim().split(' ').slice(0,-1).join('');
        
         console.log(Formula);
         
          setFormula(Formula +' '+ operator );
          setInput( operator);
        } else if (formula.endsWith("*" ) && operator !== '-'){
         // console.log(lastelement);
          const Formula = formula.trim().split('').slice(0,-1).join('');
        
        
         
          setFormula(Formula + ' '+ operator );
          setInput( operator);}
          else if (formula.endsWith("/" ) && operator !== '-'){
           // console.log(lastelement);
            const Formula = formula.trim().split('').slice(0,-1).join('');
          
          
           
            setFormula(Formula + ' '+ operator );
            setInput( operator);}
            else if (formula.endsWith("-" ) && operator !== '-'){
             // console.log(lastelement);
              const Formula = formula.trim().split('').slice(0,-1).join('');
              setFormula(Formula +' '+ operator );
              setInput(operator);
} 
if ( formula.endsWith("-") && operator === "-" ){
  const Formula = formula.trim().replace(/--/g, '+');
  setFormula(Formula);
  setInput(operator);

  return
}
}
        
  
  
function handleEqual(){
  //use eval to calculate the result of the display string
  //parse string to float to get rid of the trailing zeros
  // const total = parseFloat(eval(formula));
  // const Total = total.toFixed(4);
  //convert the result to a number with 4 decimal places
//   const totalToShow = `${Total.toString()}`
// setInput(totalToShow );
// setFormula(`${totalToShow}`);
// setOverwrite(true);
// setSolved(true);

let calculation = formula;
calculation = calculation.replace(/[*\/+-]+$/g, '');
const total = eval(calculation).toString();
setInput(total);
setFormula(total);
setOverwrite(true);
setSolved(true);


}


const lastelement = formula[formula.length-1];

const Array = formula.trim().split( " ");
console.log(Array);
//console.log(lastelement);
const lastNumber = Array[Array.length-1];
console.log(lastNumber);

//function for decimal point
function handleDecimal(event){
  const decimal = event.target.textContent;
  
  
  if (input === '0' && formula === '') {
    setInput("0.");
    setFormula("0.");
  }
   else if (lastelement === '+' || lastelement === '-' || lastelement === '*' || lastelement === '/'){
    setInput("0.");
    setFormula(formula + "0.") }
  
  else if(lastNumber.includes(".")){return}
  else {
    setInput( decimal);
    setFormula(formula + decimal);
  }
  
}
function handleDelete(){
  //delete the last character from the display
  const newInput = input.slice(0, -1);
  const newFormula = formula.slice(0, -1);
  setInput(newInput);
  setFormula(newFormula);
}

function handleClear(){
  //clear the display
  setInput('0');
  setFormula('0');
  setOverwrite(false);
}
  return (
    <div  className="calculator-grid">
      
      <div   className="output">
      
        <div  className="formulaScreen">{input}</div>
          <div  id = "display" className="formulaScreenText"> {formula}</div>
          </div>
        
           <button id="clear" className="span-two" value="AC" onClick={handleClear}>AC</button>
           <button id ="delete" className="operatorButton" value="DEL" onClick={handleDelete} >DEL</button>
           <button id="divide" className="operatorButton" value="/" onClick={handleOperator}  >/</button>
           <button id="multiply" className="operatorButton" value="*" onClick={handleOperator} >*</button>
           <button id="seven" className="numberButton" value="7" onClick={handleNumber} >7</button>
            <button id="eight" className="numberButton" value="8" onClick={handleNumber}>8</button>
            <button id="nine" className="numberButton" value="9" onClick={handleNumber}>9</button>
            <button id="subtract" className="operatorButton" value="-" onClick={handleOperator}>-</button>
            <button id="four" className="numberButton" value="4" onClick={handleNumber}>4</button>
            <button id="five" className="numberButton" value="5" onClick={handleNumber}>5</button>
            <button id="six" className="numberButton" value="6" onClick={handleNumber}>6</button>
            <button id="add" className="operatorButton" value="+" onClick={handleOperator}>+</button>
            <button id="one" className="numberOne" value="1" onClick={handleNumber}>1</button>
            <button id="two" className="numberButton" value="2" onClick={handleNumber}>2</button>
            <button id="three" className="numberButton" value="3" onClick={handleNumber}>3</button>
            <button id="zero" className="numberButton" value="0" onClick={handleNumber}>0</button>
            <button id="decimal" className="numberButton" value="." onClick={handleDecimal}>.</button>
            <button id="equals" className="span-two" value="=" onClick={handleEqual}>=</button>

          
        
        <div className="author">
          <p>Designed and Coded by Inga</p>

        </div>
      

      
      
    </div>
  );
}

export default App;