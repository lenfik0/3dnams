import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/Menu';
import { NavLink, Routes, Route } from 'react-router-dom';
import All from './components/all/all';
import Statuette from './components/statuette/statuette';
import Other from './components/other/other';
import Antistress from './components/antistress/antistress';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className='basket_category'>
        <NavLink to={'all'}>Все товары </NavLink>
        <NavLink to={'statuette'}>Статуэтки </NavLink>
        <NavLink to={'antistress'}>Антистрессы </NavLink>
        <NavLink to={'other'}>Другое</NavLink>
      </div>
      <div className='basket_content'>
        <Routes>
          <Route path='/all' element={<All />} />
          <Route path='/statuette' element={<Statuette />} />
          <Route path='/antistress' element={<Antistress />} />
          <Route path='/other' element={<Other />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
