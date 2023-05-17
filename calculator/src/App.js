/* eslint-disable no-eval */
import React,{useState} from 'react';


function App() {

  //set the initial value of the display to 0
const [input, setInput] = useState('0');
const [formula, setFormula] = useState('');
  const [output, setOutput] = useState('');

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
    setInput( number);
    setFormula(formula + "" + number +"");
  }
}

  function handleOperator(event, number){

    let lastelement = formula.slice(-1);
    //console.log(lastelement);
   
    
    operator = event.target.textContent;
    if (input === '0' && formula === '') {

     if (operator === '-' && formula === ''){     
       setInput(operator);
      setFormula( formula + "" + operator + "");
    }
 return
        } 
        if ( formula.length===1 && formula.endsWith("-") && operator === "-" ){
          return}
        setInput(operator);
           setFormula( formula + operator );
           
            
                    
                  

        if (formula.endsWith("+" ) && operator !== '-'){
          //console.log(lastelement);
          const Formula = formula.split('').slice(0,-1).join('');
        
         //console.log(Formula);
         
          setFormula(Formula + operator);
          setInput(operator);
        } else if (formula.endsWith("*" ) && operator !== '-'){
         // console.log(lastelement);
          const Formula = formula.split('').slice(0,-1).join('');
        
        
         
          setFormula(Formula + operator);
          setInput(operator);}
          else if (formula.endsWith("/" ) && operator !== '-'){
           // console.log(lastelement);
            const Formula = formula.split('').slice(0,-1).join('');
          
          
           
            setFormula(Formula + operator);
            setInput(operator);}
            else if (formula.endsWith("-" ) && operator !== '-'){
             // console.log(lastelement);
              const Formula = formula.split('').slice(0,-1).join('');
              setFormula(Formula + operator);
              setInput(operator);
} 
if (formula[formula.length -2] === '-' && formula.endsWith("-")  && operator === '-'){

  return
}
}
        
  
  
function handleEqual(){
  //use eval to calculate the result of the display string
  //parse string to float to get rid of the trailing zeros
  const total = parseFloat(eval(formula));
  //convert the result to a number with 2 decimal places
  const totalToShow = `${total.toFixed(4)}`
setInput(totalToShow );
setFormula(`${totalToShow}`);
setOutput(`${totalToShow}`);

// let result= '';
 
// try {
//   result = eval(evalExpression);
// } catch (error) {
//   result = 'error';
// }
// setFormula(result);
// setInput(result);
}



//function for decimal point
function handleDecimal(){
  if (input === '0'){
    setInput('0.');
  setFormula('0.');}
//convert the display string to an array separated by white space
const displayArray = formula.split(' ');
//get the last element of the array
const lastElement = displayArray[displayArray.length - 1];
//if the last element of the array already contains a decimal, we will not add another one
if (lastElement.includes('.')){
  return;
} else {
  //else we will add the decimal to the current value
  setInput(input + '.');
  setFormula(formula + '.');
}}

function handleClear(){
  //clear the display
  setInput('0');
  setFormula('');
  setOutput('');
}
  return (
    <div className="App">
      <header className="calculator-app">
      <div className="calculator">
        <div className="formulaScreen">{formula}</div>
          <div  id = "display" className="formulaScreenText">{input}</div>
          <div className='buttonWrap'>
           <button id="clear" className="jumbo" value="AC" onClick={handleClear}>AC</button>
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
            <button id="zero" className="jumbo" value="0" onClick={handleNumber}>0</button>
            <button id="decimal" className="numberButton" value="." onClick={handleDecimal}>.</button>
            <button id="equals" className="operatorButton" value="=" onClick={handleEqual}>=</button>
</div>
          </div>
        
        <div className="author">
          <p>Designed and Coded by Inga</p>

        </div>
      

      
      </header>
    </div>
  );
}

export default App;