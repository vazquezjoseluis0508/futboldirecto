import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AveragesPage from './pages/AveragesPage';
import LigaProfesional from './pages/LigaProfesional';
import CopaLibertadores from './pages/CopaLibertadores';
import CopaSudamericana from './pages/CopaSudamericana';
import CopaArgentina from './pages/CopaArgentina';

function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promedios" element={<AveragesPage />} />
          <Route path="/liga-profesional" element={<LigaProfesional />} />
          <Route path="/copa-libertadores" element={<CopaLibertadores />} />
          <Route path="/copa-sudamericana" element={<CopaSudamericana />} />
          <Route path="/copa-argentina" element={<CopaArgentina />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
