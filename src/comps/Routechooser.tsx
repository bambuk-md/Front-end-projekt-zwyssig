
import { Routes, Route } from 'react-router-dom';

import Login from './Login';
import Main from './MainComps';
import VerifyLogin from './VerifyLogin';
const Chooser = () => {
  //routing von hier gelernt: https://blog.devgenius.io/implementing-react-router-v6-with-code-splitting-in-a-react-typescript-project-14d98e2cab79

return (         
    <Routes>
    <Route path='/' element={<VerifyLogin/>} />
    <Route path='/main' element={<Main/>} />
    <Route path='/login' element={<Login/>} />
  
  </Routes>
);
}
export default Chooser;