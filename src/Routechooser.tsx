import { Routes, Route } from 'react-router-dom';
import Tasks from './AppDelete';
import Login from './Login';
import VerifyLogin from './Main';
const Chooser = () => {
return (         
    <Routes>
    <Route path='/' element={<VerifyLogin/>} />
    <Route path='/main' element={<Tasks/>} />
    
  </Routes>
);
}
export default Chooser;