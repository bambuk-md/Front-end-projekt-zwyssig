import { Routes, Route } from 'react-router-dom';
import Tasks from './AppDelete';
import Login from './Login';
import Main from './MainComps';
import VerifyLogin from './VerifyLogin';
const Chooser = () => {
return (         
    <Routes>
    <Route path='/' element={<VerifyLogin/>} />
    <Route path='/main' element={<Main/>} />
    <Route path='/login' element={<Login/>} />
    
    
  </Routes>
);
}
export default Chooser;