import { useState } from "react";
import { useEffect } from "react";

function UseEff(){

  const [content, setContent] = useState(0);
  const [likes, setLikes] = useState(0);

  const contentButton = ()=>{
    setContent(prevCount => prevCount+1)
  }

  useEffect(() => {
    // Check if it's not the initial render
    if (content!== 0){
      alert("Content button clicked");
    }
  }, [content]);


  return(
    <div>
      <h3 style={content%2 != 0 ?{display: "block"}:{display:'none'}}>This is content.</h3>
      <button onClick={contentButton}>Content</button>
      <h4>{likes}</h4>
      <button onClick={()=>setLikes(currLikes=>currLikes+1)}>Like</button>
    </div>
  )

}


export default UseEff;