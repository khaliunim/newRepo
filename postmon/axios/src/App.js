import  axios from "axios"
import  "./App.css"
import React, {useEffect, useState} from "react"

function App() {
  const [data, setData] = useState([])
  const instanse = axios.create({
    baseURL:`http://localhost:8000`
  })

  const getdata = async() =>{
    try {
      const tes = await instanse.get("/");

      // console.log(tes)
        setData(tes.data.data);
    } catch(error){
        // alert("ooldoo")
    }
  }
  useEffect(()=>{
    getdata()
  })
  return (
    <div className="App"> 
      {data.map((cur) =>(
        <div className="container">
          <div className="fName">
            <h3>firstName:</h3>
            <div>{cur.firstName}</div>
          </div>
          <div className="fName">
            <h3>lastName:</h3>
            <div>{cur.lastName}</div>
          </div>
          <div className="fName">
            <h3>Date:</h3>
            <div>{cur.registerDate}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default App;
