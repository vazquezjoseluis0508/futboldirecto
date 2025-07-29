import standings from '../utils/standings';

function Standings() {
  return (
    <section>
      <h2>Tabla de posiciones</h2>
      <table>
        <thead>
          <tr>
            <th>Equipo</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((s) => (
            <tr key={s.team}>
              <td>{s.team}</td>
              <td>{s.played}</td>
              <td>{s.won}</td>
              <td>{s.drawn}</td>
              <td>{s.lost}</td>
              <td>{s.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Standings;
