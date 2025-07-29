import Calendar from '../components/Calendar';
import Standings from '../components/Standings';

function Home() {
  return (
    <div>
      <h1>Fútbol Directo</h1>
      <p>Bienvenido a la web de resultados en vivo.</p>
      <Calendar />
      <Standings />
    </div>
  );
}

export default Home;
