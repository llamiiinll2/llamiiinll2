import { useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom";


interface IReactMemo{}
const ReactMemo=(props:IReactMemo)=>{
    const [render,setrender]=useState(0)
    const [buttonTitle,setbuttonTitle]=useState("")
    const handleRenderChange=()=>{
        setrender(render+1)
    }
    return(
        <div>
            <h2>Products render count{render}</h2>
           
        </div>
    )

}

export default ReactMemo