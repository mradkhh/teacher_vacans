import Vacancies from 'pages/Vacancies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Vacancy from 'pages/Vacancy';
import './styles/normalize.css'
import 'antd/dist/antd.css';
import './styles/global.scss'
import './styles/design_token.css'
import './styles/utils.css'
import './static/fonts/stylesheet.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vacancies' element={<Vacancies/>}/>
        <Route path='/vacancy-details' element={<Vacancy/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
