import  axios from "axios"
import  "./App.css"
import React, {useEffect, useState} from "react"

function App() {
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [createPostData, setCreatePostData] = useState({ firstName: '', lastName: '' });
  // const [DeletePostData] = useState([])
  const instanse = axios.create({
      baseURL:`http://localhost:8000`
    })
    
    // useEffect(() => {
    //   axios.get('http://localhost:8000/posts').then(({ data }) => {
    //     setData(data);
    //   })
    // }, []);

  const createPost = async () => {
    try {
      await axios.post('http://localhost:8000', createPostData)

      const { data } = await axios.get('http://localhost:8000');
      const tes = await instanse.get("/");
      setData(data);
      setCreatePostData({ firstName: '', lastName: '' })
      setData(tes.data.data);
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  }

  
  const getdata = async() =>{
    try {
      const tes = await instanse.get("/");
      setData(tes.data.data);
    } catch(error){}
  }
  
  const deletePost = async ({_id}) => {
    console.log("asd")
    try {
      await axios.delete(`http://localhost:8000/${_id}`, data)
      const res = await instanse.get("/");
      setData(res.data.data);
      console.log(res.data)

    } catch (err) {
      console.error(err);
    }
  }
  useEffect(()=>{
    getdata()
  },[])
  
  return (
    <div className="App"> 
      <header>
      </header>
      {data.map((cur) => (
        <div className="container">
          <button onClick={() => deletePost(cur)}>delete</button>
          <button onClick={() => setShowModal(true)}>Create Post</button>
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
      {showModal && <div className='modalContainer'>
        <div className='modal'>
          <div className='inputContainer'>
            <h4>title</h4>

            <input onChange={(e) => setCreatePostData({ ...createPostData, firstName: e.target.value })} />
          </div>

          <div className='inputContainer'>
            <h4>message</h4>

            <input onChange={(e) => setCreatePostData({ ...createPostData, lastName: e.target.value })} />
          </div>
          <button onClick={createPost}>Create</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </div>}
  </div>
  )
}
export default App;
