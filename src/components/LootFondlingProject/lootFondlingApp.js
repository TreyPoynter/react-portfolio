import './style/card.css'
import { NavLink } from 'react-router-dom';
import {useState, useEffect} from 'react';
import treasureItems from './TreasureItems/treasureItems.js'
import AddTreasure from './AddTreasure/addTreasure.js';
import Treasure from './Treasure/treasure.js';
import SearchTreasure from './SearchTreasure/searchTreasure.js';
import {keyword} from './SearchTreasure/searchTreasure.js';
import './style/searchTreasure.css';
import './style/addTreasure.css';
import './style/card.css';

function LootFondlingApp() {
  // our hook to 'reel' in the data
  const [allTreasureItems, setAllTreasure] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [name, setName] = useState('');
  const [goldAmount, setGoldAmount] = useState(0);
  const [spawnRate, setSpawnRate] = useState(0);
  const [selectedFile, setSelectedFile] = useState();

  const saveTreasureItems = (treasureItems) => {
    setAllTreasure(treasureItems);
    setSearchResults(treasureItems);
    if (localStorage) {
      localStorage.setItem('treasureItems', JSON.stringify(treasureItems));
      console.log('saved treasureItems to local storage');
    }
  }

  const addTreasureItem = (newTreasure) => {
    const updatedTreasureItems = [...allTreasureItems, newTreasure];
    saveTreasureItems(updatedTreasureItems);
  }

  const editTreasureItem = (updatedTreasure) => {
    const updatedTreasureArray = allTreasureItems.map(treasure => treasure.id === updatedTreasure.id ? {...treasure, ...updatedTreasure} : treasure);
    saveTreasureItems(updatedTreasureArray);
  }

  useEffect(() => {
    if (localStorage) {
      const treasureLocalStorage = JSON.parse(localStorage.getItem('treasureItems'));
      if (treasureLocalStorage) {
        saveTreasureItems(treasureLocalStorage);
      }
    } else {
      saveTreasureItems(treasureItems);
    }
  }, []);

  const searchTreasure = () => {
    let keywordsArray = [];

    if (keyword) {
      keywordsArray = keyword.toLowerCase().split(' ');
    }

    if (keywordsArray.length > 0) {
      const searchResult = allTreasureItems.filter(treasure => {
        for (const word of keywordsArray) {
          if (treasure.name.toLowerCase().includes(word)) {
            return true;
          }
        }
        return false;
      });
      setSearchResults(searchResult);
    } else {
      setSearchResults(allTreasureItems);
    }
  }

  const deleteTreasure = (treasureToDelete) => {
    const updatedTreasureArray = allTreasureItems.filter(treasure => treasure.id !== treasureToDelete.id);
    saveTreasureItems(updatedTreasureArray);
  }

  return (
    <div className='bg-dark text-light'>
    <div className="container">
      <div className='text-center'>
        <h1 className='display-2'>Loot Fondling</h1>
        <NavLink to='/'>
          <a href="" className='btn btn-lg btn-primary mb-4'>Go Back to Portfolio</a>
        </NavLink>
      </div>
      <AddTreasure addTreasure={addTreasureItem} name={name} setName={setName} goldAmount={goldAmount} setGoldAmount={setGoldAmount} 
        spawnRate={spawnRate} setSpawnRate={setSpawnRate} selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
      <SearchTreasure searchTreasure={searchTreasure}/>
      <div className="row">
        {searchResults && searchResults.map((treasure) => // loops through the allTreasureItems with .map
          (
            <div className="col-lg-3 col-md-6" key={treasure.id}>
              <Treasure treasure={treasure} deleteTreasure={deleteTreasure} editTreasureItem={editTreasureItem} name={name} setName={setName} goldAmount={goldAmount} setGoldAmount={setGoldAmount} 
                spawnRate={spawnRate} setSpawnRate={setSpawnRate}/>
            </div>
          )
        )}
      </div>
    </div> 
    </div>
  );
}

export default LootFondlingApp;
