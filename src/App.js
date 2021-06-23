import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Searchbar from './components/SearchBar/Searchbar';
import ButtonCategory from './components/ButtonCategory/ButtonCategory';
import { faSlidersH, faSort } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [list,setList] = useState([]);
  const [filterby,setFilterBy] = useState();
  const [sortby,setSortby] = useState("");
  const [searchterm,setSearchterm] = useState("");
  let order = "";
  let sortterm="";

  useEffect(()=>{
    if(sortby===3){
      sortterm = "bornAt"
      order = "desc"
    }
    else if(sortby===4){
      sortterm = "bornAt"
      order = ""
    }
    axios
      .get(`https://60d075407de0b20017108b89.mockapi.io/api/v1/animals?name=${searchterm}&sortBy=${sortterm}&order=${order}`)
      .then(res=>{
          setList(res.data);
      })
      .catch(error=>{
          console.log(error)
      })
  },[searchterm,sortby])

  const handleChange = (e) =>{
    setSearchterm(e.target.value)
  }

  const onClickHandler = (id) => {
    if(id===filterby){
      setFilterBy("");
    }
    else{
      setFilterBy(id);
    }
  }

  const sortHandler = (id) => {
    if(id===sortby){
      setSortby("");
    }
    else{
      setSortby(id);
    }
  }

  const filteredList = filterby ?
                     (filterby===1 ? (
                          list.filter((pet)=>{
                            let date = new Date(pet.bornAt);
                            let today = Date.now()
                            return (today-date) < 30*24*60*60*1000;
                          })
                      ):(
                          list.filter((pet)=>{
                            let date = new Date(pet.bornAt);
                            let today = Date.now()
                            return (today-date) >= 30*24*60*60*1000;
                          })
                      )):(list)

  return (
    <div className="App">
      <h2>My Pets</h2>
      <Searchbar onChange={handleChange} />
      <div className="buttons-container">
        <ButtonCategory name="Filters" icon={faSlidersH} />
        <Button name="Less than 1 Month Old" id={1} current={filterby} onClick={onClickHandler}/>
        <Button name="More than 1 Month Old" id={2} current={filterby} onClick={onClickHandler}/>
      </div>
      <div className="buttons-container">
        <ButtonCategory name="Sort By Age" icon={faSort} />
        <Button name="Asc" id={3} current={sortby} onClick={sortHandler}/>
        <Button name="Dsc" id={4} current={sortby} onClick={sortHandler}/>
      </div>
      { 
        filteredList.length !== 0 ? (
        filteredList.map(pet => {
         return <Card key={pet.id} name={pet.name} bornAt={pet.bornAt}/>
        })):
        (
          <h3>No Match Found</h3>
        )
      }
    </div>
  );
}

export default App;
