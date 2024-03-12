import {
  useState,
  createContext
} from "react"; 
import "./App.css";
import Input from "./Input";
import ButtonField from "./ButtonField"


export const ValueContext = createContext()
function App() {
  const [value , setValue] = useState(0);
  return ( 
    <ValueContext.Provider value={{value, setValue}}>
    <div className="container">
      <div className="calculator">
        <h1>Calculator</h1>
        <form action="">
          <Input/>
          <ButtonField/>
        </form>
      </div>
    </div>
    </ValueContext.Provider>
  ); 
} 
 
export default App; 

