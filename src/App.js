import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
