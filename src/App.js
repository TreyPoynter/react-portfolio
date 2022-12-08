import './App.css';
import PortfolioHomePage from './components/PortfolioHomePage/portfolioHomePage.js';
import LootFondlingProject from './components/LootFondlingProject/lootFondlingApp.js';
import LawDayRunHome from './components/LawDayRun/lawDayRunHome.js';
import Contact from './components/LawDayRun/contact';
import RaceInfo from './components/LawDayRun/raceInfo';
import Sponsors from './components/LawDayRun/sponsors';
import Volunteer from './components/LawDayRun/volunteer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PortfolioHomePage/>}/>

        <Route path='/lootFondling' element={<LootFondlingProject/>}/>

        <Route path='/lawDayRun/home' element={<LawDayRunHome/>}/>
        <Route path='/lawDayRun/contact' element={<Contact/>}/>
        <Route path='/lawDayRun/raceInfo' element={<RaceInfo/>}/>
        <Route path='/lawDayRun/sponsors' element={<Sponsors/>}/>
        <Route path='/lawDayRun/volunteer' element={<Volunteer/>}/>
      </Routes>
    </>
  );
}

export default App;
