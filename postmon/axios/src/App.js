import  axios from "axios"
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
    <div>
      {data.map((cur) =>(
        <div>
          <div>{cur.firstName}</div>
          <div>{cur.lastName}</div>
        </div>
      ))}
    </div>
  )
}
export default App;
