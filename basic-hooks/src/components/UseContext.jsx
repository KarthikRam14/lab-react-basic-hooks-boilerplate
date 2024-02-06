import { useContext } from "react";
import { ToggleTheme } from "../App";
import UseState from '../components/UseState'
import UseEff from '../components/UseEffect';

function UseContext(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
      <UseState/>
      <UseEff/>
    </div>
  )
}

export default UseContext;