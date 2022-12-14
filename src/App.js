import './App.css';
import PortfolioHomePage from './components/PortfolioHomePage/portfolioHomePage.js';
import LootFondlingProject from './components/LootFondlingProject/lootFondlingApp.js';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PortfolioHomePage/>}/>

        <Route path='/lootFondling' element={<LootFondlingProject/>}/>
      </Routes>
    </>
  );
}

export default App;
