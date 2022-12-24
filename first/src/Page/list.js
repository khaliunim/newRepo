import './list.css';  
// import axios from 'axios';
import { Card } from '../Component/Card';
import { MOVIE_TREND } from '../Component/trendData';
import React, { useEffect, useState } from 'react';
import { MOVIE_LATE } from '../Component/lateData'
import { Link } from 'react-router-dom';

function List() {
  const [ldata, setLateData] = useState([]);
  const [tdata, setTrendData] = useState([]);
  const [Valuesearch, setSearch] = useState("")
  const tmovie = MOVIE_TREND;
  const lmovie = MOVIE_LATE;

  const getData = () => {
    try {
      setTrendData(tmovie)
      setLateData(lmovie)
      console.log(tmovie, lmovie)
    } 
    catch (error) {
      alert("error")
    }
  }
  useEffect(() => {
    getData()
  }, []);

    return (
        <div className='listAllContainer'>
          <div className='header'>
            <Link to={"/"}><h1 className='xmovie'>Xmovie</h1></Link>
            <input placeholder='Enter keywords\...' className='search' value={Valuesearch} onChange={(e)=> setSearch(e.target.value)}></input>
          </div>

            <h1 className='title'>Trending</h1>
            <div className='listContainer'>
              {
                tdata.filter(e => e.name.includes(Valuesearch)).map((cur) =>
                <Card 
                img={cur.img}
                name={cur.name}
                year={cur.year}
                time={cur.runtime}
                id={cur.id}
                />
                )
              }
            </div>
          <h1 className='title'>Latest Movies</h1>
          <div className='listContainer'>
              {
                ldata.filter(e => e.name.includes(Valuesearch)).map((cur) =>
                <Card 
                img={cur.img}
                name={cur.name}
                year={cur.year}
                time={cur.runtime}
                id={cur.id}
                />
                )
              }
            </div>
        </div>

    )
}
export default List;