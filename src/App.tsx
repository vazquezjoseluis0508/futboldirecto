import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import StandingsPage from './pages/StandingsPage';

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabla" element={<StandingsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
