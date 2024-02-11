import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
