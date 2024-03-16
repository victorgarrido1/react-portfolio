import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router> // Fix: Replace `</>` with `</Router>`
  );
}

export default App;