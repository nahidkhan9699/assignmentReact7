import React,{useState}from "react";
export const Phone=()=>{
    const[Phone, setPhone]=useState("")
    const[model,SetModel]=useState("")
    const[color,setColor]=useState("")
    const[price,setPrice]=useState("")
return(

        <table>
        <tr>
            <td> <input type="text" placeholder="Enter Brand Name" onChange={(e) => setPhone(e.target.value)} /></td> <td>{Phone}</td>
          
            </tr>
    <tr>
        <td>{model}</td> <td><input type="text" placeholder="Enter Model Name" onChange={(e)=>SetModel(e.target.value)} /></td>
    </tr>
    
          <tr>
            <td><input type="text" placeholder="Color Name" onChange={(e)=>setColor(e.target.value)} /></td><td>{color}</td>
            </tr>
      <tr>
        <td>RS.{price}</td> <td><input type="text" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)}/></td>
        </tr>      


    </table >
)
}