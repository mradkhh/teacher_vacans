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
import Vacancies from 'pages/Vacancies';
import Apply from 'pages/Apply';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vacancies' element={<Vacancies/>}/>
        <Route path='/vacancy/:id' element={<Vacancy/>}/>
        <Route path='/apply' element={<Apply/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/sign-in/form' element={<Sign/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
