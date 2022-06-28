import Vacancies from 'pages/Vacancies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Vacancy from 'pages/Vacancy';
import './styles/normalize.css'
import 'antd/dist/antd.css';
import './static/fonts/stylesheet.css'
import './styles/design_token.css'
import './styles/utils.css'
import './styles/global.scss'
import Sign from 'pages/Sign';
import Docs from 'pages/Docs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vacancies' element={<Vacancies/>}/>
        <Route path='/vacancy-details' element={<Vacancy/>}/>
        <Route path='/sign-in/form' element={<Sign/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
