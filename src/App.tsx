import { useState } from 'react';
import { BrowserRouter, Routes, Route  }  from 'react-router-dom'
import AppContext from 'context';
import { initialValue } from 'context/values';
import NotFound from 'pages/404'
import { publicRoutes, privateRoutes } from 'router'
import { getToken } from 'utils/tokenStorage'
import './styles/normalize.css'
import 'antd/dist/antd.css'
import './static/fonts/stylesheet.css'
import './styles/design_token.css'
import './styles/utils.css'
import './styles/global.scss'

function App() {
  const isAuth = getToken()
  return (
    <AppContext.Provider value={ initialValue }>
      <BrowserRouter>
      <Routes>
        {
          isAuth
            ?
            privateRoutes.map(route =>
              <Route key={route.path} path={route.path} element={<route.component/>}/>
              )
            :
            publicRoutes.map(route =>
              <Route key={route.path} path={route.path} element={<route.component/>}/>
              )
        }
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
