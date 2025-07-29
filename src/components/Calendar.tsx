import fixtures from '../utils/fixtures';

function Calendar() {
  return (
    <section>
      <h2>Calendario de partidos</h2>
      <ul>
        {fixtures.map((match) => (
          <li key={`${match.date}-${match.home}`}>{`${match.date} ${match.time} - ${match.home} vs ${match.away}`}</li>
        ))}
      </ul>
    </section>
  );
}

export default Calendar;
