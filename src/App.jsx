import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home'
import { Login } from './routes/Login';
import { SignUp } from './routes/SignUp';
import { UserProvider } from './context/UserContext';
import { NavbarComponent } from './components/NavbarComponent';
import Catalogo from './components/Listado-de-Productos/Catalogo';
import MiPerfil from './components/MiPerfil';

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<Home/>}/>
        <Route path='/login' element={<UserProvider><Login /></UserProvider>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/catalogo' element={<Catalogo />} />
        <Route path='/miPerfil' element={<MiPerfil />} />

      </Routes>
    </>
  );
}

export default App;
