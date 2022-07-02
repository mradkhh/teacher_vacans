import { BrowserRouter, Routes, Route  }  from 'react-router-dom'
import NotFound from 'pages/NotFound'
import { publicRoutes, privateRoutes } from 'router'
import { getToken } from 'utils/tokenStorage'
import './styles/normalize.css'
import 'antd/dist/antd.css'
import './static/fonts/stylesheet.css'
import './styles/design_token.css'
import './styles/utils.css'
import './styles/global.scss'
import { TestContext } from 'context'

function App() {
  const isAuth = getToken()
  return (
    <TestContext.Provider value={{
      isAuth
    }} >
      <BrowserRouter>
      <Routes>
        {
          isAuth
            ?
            privateRoutes.map(route =>
              <Route path={route.path} element={<route.component/>}/>
              )
            :
            publicRoutes.map(route =>
              <Route path={route.path} element={<route.component/>}/>
              )
        }
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </TestContext.Provider>
  );
}

export default App;
