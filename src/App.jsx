import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './layouts/Landing';
import Turnos from './layouts/Turnos';
import Asesor from './layouts/Asesor';
import PrivateRoutes from './components/PrivateRoutes';

function App() {

  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Landing></Landing>}></Route>

      <Route path='/turnos' element={<Turnos></Turnos>}></Route>

      <Route element={<PrivateRoutes/>}>
        <Route path='/asesor' element={<Asesor></Asesor>}></Route>
      </Route>

    
    </Routes>
    </BrowserRouter>
  )
}

export default App
