import  axios from "axios"
import React, {useState} from "react"
import { setEnvironmentData } from "worker_threads";

function App() {
    const [data, setData] = useState([])
    const instanse = axios.create({
        baseURL:`http://localhost:8000`
    })

    const getdata = async() =>{
        try {
            const tes = await instanse.get("users");
            setData(tes.data);
        } catch(errpr){
            alert("ooldoo")
        }
    }
}