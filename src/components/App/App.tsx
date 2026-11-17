import Layout from '../../Layout';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SettingsPage from '../SettingsPage/SettingsPage';
import LoginPage from '../LoginPage/LoginPage';
import './App.css';
import { Navigate, Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Routes>
          <Route element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Route>
      </Routes>
    </>
  );
}

export default App