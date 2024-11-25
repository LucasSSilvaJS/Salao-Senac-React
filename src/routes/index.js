import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Password from '../pages/Password';
import Scheduling from '../pages/Scheduling';
import Notification from '../pages/Notification';
import Feedback from '../pages/Feedback';
import Dashboard from '../pages/Dashboard';
import Service from '../pages/Service';
import Team from '../pages/Team';
import CreateService from '../pages/CreateService';
import Inventory from '../pages/Inventory';
import FeedbackAdm from '../pages/FeedbackAdm';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Menu/>} path='/menu'/>
      <Route element={<Password/>} path='/password'/>
      <Route element={<Scheduling/>} path='/scheduling'/>
      <Route element={<Notification/>} path='/notification'/>
      <Route element={<Feedback/>} path='/feedback'/>
      <Route element={<Dashboard/>} path='/dashboard'/>
      <Route element={<Service/>} path='/service'/>
      <Route element={<Team/>} path='/team'/>
      <Route element={<CreateService/>} path='/create-service'/>
      <Route element={<Inventory/>} path='/inventory'/>
      <Route element={<FeedbackAdm/>} path='/feedback-adm'/>
    </Routes>
  );
}

export default AppRoutes;