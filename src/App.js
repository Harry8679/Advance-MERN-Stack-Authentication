import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import LoginWithCode from './pages/auth/LoginWithCode';
import Verify from './pages/auth/Verify';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/resetPassword/:resetToken' element={<ResetPassword />} />
          <Route path='/loginWithCode/:email' element={<LoginWithCode />} />
          <Route path='/verify/:verificationToken' element={<Layout><Verify /></Layout>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
