import { useContext,} from 'react'
import {ValueContext} from "./App.js"
function ButtonField() {
  const { value, setValue } = useContext(ValueContext);
  const handleNumberClick = (number) => {
    setValue(value === 0 ? number : value + number)
  };
  const handleOperatorClick = (operator) => {
    if(value === 0){
      setValue(operator)
    }
    else if ( operator === '⅟x'){
      setValue(1 / value)
    }
    else if ( operator === 'x²'){
      setValue(Math.pow(value, 2))
    }
    else if ( operator === '²√x'){
      setValue(Math.sqrt(value))
    }
    else(
      setValue(value + `${operator}`)
    )
  }

  const handleClearClick = () => {
    setValue(0)
  }
  const handleDeleteClick = () => {
    setValue(`${value}`.slice(0, -1));
  }
  const handleEqualClick = () => {
    const tokens = value.match(/(\d+(\.\d+)?)|([*/+\-%])/g);
    let result = parseFloat(tokens[0]);
    for(let i = 1 ; i < tokens.length; i += 2){
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);
      if (operator === '+') {
        result += operand;
      } else if (operator === '-') {
        result -= operand;
      } else if (operator === '*') {
        result *= operand;
      } else if (operator === '/') {
        result /= operand;
      } else if(operator === '%'){
        result %= operand;
      }
    }
    setValue(result);
  }
  
  return (
    <>
    <div>
      <input type='button' value="%" onClick={() => handleOperatorClick('%')}/>
      <input type='button' value="AC" onClick={handleClearClick}/>
      <input type='button' value="DE" onClick={handleDeleteClick}/>
      <input type='button' value="/" onClick={() => handleOperatorClick('/')}/>
    </div>
    <div>
      <input type='button' value="⅟x" onClick={() => handleOperatorClick('⅟x')}/>
      <input type='button' value="x²" onClick={() => handleOperatorClick('x²')}/>
      <input type='button' value="²√x" onClick={() => handleOperatorClick('²√x')}/>
      <input type='button' value="*" onClick={() => handleOperatorClick('*')}/>
    </div>
    <div>
      <input type='button' className="gray__input" value="7" onClick={() => handleNumberClick('7')}/>
      <input type='button' className="gray__input" value="8" onClick={() => handleNumberClick('8')}/>
      <input type='button' className="gray__input" value="9" onClick={() => handleNumberClick('9')}/>
      <input type='button' value="-" onClick={() => handleOperatorClick('-')}/>
    </div>
    <div>
      <input type='button' className="gray__input" value="4" onClick={() => handleNumberClick('4')}/>
      <input type='button' className="gray__input" value="5" onClick={() => handleNumberClick('5')}/>
      <input type='button' className="gray__input" value="6" onClick={() => handleNumberClick('6')}/>
      <input type='button' value="+" onClick={() => handleOperatorClick('+')}/>
    </div>
    <div>
      <input type='button' className="gray__input" value="1" onClick={() => handleNumberClick('1')}/>
      <input type='button' className="gray__input" value="2" onClick={() => handleNumberClick('2')}/>
      <input type='button' className="gray__input" value="3" onClick={() => handleNumberClick('3')}/>
      <input type='button' value="." onClick={() => handleNumberClick('.')}/>
    </div>
    <div>
      <input type='button' className="gray__input" value="00" onClick={() => handleNumberClick('00')}/>
      <input type='button' className="gray__input" value="0" onClick={() => handleNumberClick('0')}/>
      <input type='button' className="light-gray__input equal" value="=" onClick={handleEqualClick}/>
    </div>
  </>
  )
}

export default ButtonField