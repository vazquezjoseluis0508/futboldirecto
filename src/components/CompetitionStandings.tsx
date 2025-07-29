import React from 'react';
import './CompetitionStandings.css';

interface Team {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: string[];
}

interface CompetitionStandingsProps {
  competition: string;
  teams: Team[];
}

const CompetitionStandings: React.FC<CompetitionStandingsProps> = ({ competition, teams }) => {
  const getFormColor = (result: string) => {
    switch (result) {
      case 'W': return '#5a8a5a';
      case 'D': return '#8a8a5a';
      case 'L': return '#8a5a5a';
      default: return '#666';
    }
  };

  const getPositionClass = (position: number) => {
    if (position <= 4) return 'champions-league';
    if (position <= 6) return 'europa-league';
    if (position >= teams.length - 2) return 'relegation';
    return '';
  };

  return (
    <div className="competition-standings">
      <div className="competition-header">
        <h2>{competition}</h2>
        <div className="competition-info">
          <span className="season">Temporada 2024</span>
        </div>
      </div>

      <div className="standings-container">
        <div className="legend">
          <div className="legend-item">
            <span className="legend-color champions-league"></span>
            <span>Clasificación a Copa Libertadores</span>
          </div>
          <div className="legend-item">
            <span className="legend-color europa-league"></span>
            <span>Clasificación a Copa Sudamericana</span>
          </div>
          <div className="legend-item">
            <span className="legend-color relegation"></span>
            <span>Zona de Descenso</span>
          </div>
        </div>

        <div className="table-container">
          <table className="standings-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Equipo</th>
                <th>PJ</th>
                <th>G</th>
                <th>E</th>
                <th>P</th>
                <th>GF</th>
                <th>GC</th>
                <th>DG</th>
                <th>Pts</th>
                <th>Forma</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={index} className={getPositionClass(team.position)}>
                  <td className="position">{team.position}</td>
                  <td className="team-name">{team.name}</td>
                  <td>{team.played}</td>
                  <td>{team.won}</td>
                  <td>{team.drawn}</td>
                  <td>{team.lost}</td>
                  <td>{team.goalsFor}</td>
                  <td>{team.goalsAgainst}</td>
                  <td className="goal-difference">
                    {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                  </td>
                  <td className="points">{team.points}</td>
                  <td className="form">
                    {team.form.slice(-5).map((result, i) => (
                      <span
                        key={i}
                        className="form-indicator"
                        style={{ backgroundColor: getFormColor(result) }}
                        title={result === 'W' ? 'Victoria' : result === 'D' ? 'Empate' : 'Derrota'}
                      >
                        {result}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <div className="stats-summary">
            <p><strong>PJ:</strong> Partidos Jugados | <strong>G:</strong> Ganados | <strong>E:</strong> Empatados | <strong>P:</strong> Perdidos</p>
            <p><strong>GF:</strong> Goles a Favor | <strong>GC:</strong> Goles en Contra | <strong>DG:</strong> Diferencia de Goles | <strong>Pts:</strong> Puntos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionStandings; 