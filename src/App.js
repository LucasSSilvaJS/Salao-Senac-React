import { ToastContainer } from 'react-toastify';
import './App.css';
import AppRoutes from './routes';
import {BrowserRouter} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
