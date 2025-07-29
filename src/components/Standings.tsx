import React, { useState, useEffect } from 'react';
import './Standings.css';

interface Team {
  id: string;
  name: string;
  position: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  form: string[]; // últimos 5 partidos: 'W', 'D', 'L'
}

const Standings: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  // Datos de ejemplo - en un proyecto real vendrían de una API
  const mockTeams: Team[] = [
    {
      id: '1',
      name: 'River Plate',
      position: 1,
      played: 15,
      won: 12,
      drawn: 2,
      lost: 1,
      goalsFor: 35,
      goalsAgainst: 12,
      points: 38,
      form: ['W', 'W', 'D', 'W', 'W']
    },
    {
      id: '2',
      name: 'Boca Juniors',
      position: 2,
      played: 15,
      won: 10,
      drawn: 3,
      lost: 2,
      goalsFor: 28,
      goalsAgainst: 15,
      points: 33,
      form: ['W', 'D', 'W', 'L', 'W']
    },
    {
      id: '3',
      name: 'Racing Club',
      position: 3,
      played: 15,
      won: 9,
      drawn: 4,
      lost: 2,
      goalsFor: 25,
      goalsAgainst: 14,
      points: 31,
      form: ['D', 'W', 'W', 'D', 'L']
    },
    {
      id: '4',
      name: 'San Lorenzo',
      position: 4,
      played: 15,
      won: 8,
      drawn: 5,
      lost: 2,
      goalsFor: 22,
      goalsAgainst: 13,
      points: 29,
      form: ['W', 'D', 'L', 'W', 'D']
    },
    {
      id: '5',
      name: 'Independiente',
      position: 5,
      played: 15,
      won: 8,
      drawn: 3,
      lost: 4,
      goalsFor: 20,
      goalsAgainst: 16,
      points: 27,
      form: ['L', 'W', 'D', 'W', 'L']
    },
    {
      id: '6',
      name: 'Estudiantes',
      position: 6,
      played: 15,
      won: 7,
      drawn: 5,
      lost: 3,
      goalsFor: 19,
      goalsAgainst: 15,
      points: 26,
      form: ['D', 'W', 'L', 'D', 'W']
    },
    {
      id: '7',
      name: 'Newell\'s',
      position: 7,
      played: 15,
      won: 7,
      drawn: 4,
      lost: 4,
      goalsFor: 18,
      goalsAgainst: 17,
      points: 25,
      form: ['W', 'L', 'D', 'W', 'L']
    },
    {
      id: '8',
      name: 'Rosario Central',
      position: 8,
      played: 15,
      won: 6,
      drawn: 6,
      lost: 3,
      goalsFor: 17,
      goalsAgainst: 16,
      points: 24,
      form: ['D', 'W', 'L', 'D', 'W']
    },
    {
      id: '9',
      name: 'Huracán',
      position: 9,
      played: 15,
      won: 6,
      drawn: 4,
      lost: 5,
      goalsFor: 16,
      goalsAgainst: 18,
      points: 22,
      form: ['L', 'D', 'W', 'L', 'D']
    },
    {
      id: '10',
      name: 'Gimnasia',
      position: 10,
      played: 15,
      won: 5,
      drawn: 5,
      lost: 5,
      goalsFor: 15,
      goalsAgainst: 17,
      points: 20,
      form: ['D', 'L', 'W', 'D', 'L']
    }
  ];

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setTeams(mockTeams);
      setLoading(false);
    }, 1000);
  }, []);

  const getFormColor = (result: string) => {
    switch (result) {
      case 'W': return '#28a745';
      case 'D': return '#ffc107';
      case 'L': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getFormText = (result: string) => {
    switch (result) {
      case 'W': return 'G';
      case 'D': return 'E';
      case 'L': return 'P';
      default: return '-';
    }
  };

  const getPositionClass = (position: number) => {
    if (position <= 4) return 'champions-league';
    if (position <= 6) return 'europa-league';
    if (position >= 18) return 'relegation';
    return '';
  };

  if (loading) {
    return (
      <div className="standings-container">
        <div className="loading">Cargando tabla de posiciones...</div>
      </div>
    );
  }

  return (
    <div className="standings-container">
      <div className="standings-header">
        <h2>Tabla de Posiciones - Liga Profesional</h2>
        <div className="legend">
          <div className="legend-item">
            <span className="legend-color champions-league"></span>
            <span>Clasificación a Libertadores</span>
          </div>
          <div className="legend-item">
            <span className="legend-color europa-league"></span>
            <span>Clasificación a Sudamericana</span>
          </div>
          <div className="legend-item">
            <span className="legend-color relegation"></span>
            <span>Zona de Descenso</span>
          </div>
        </div>
      </div>

      <div className="standings-table">
        <table>
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
            {teams.map(team => (
              <tr key={team.id} className={getPositionClass(team.position)}>
                <td className="position">{team.position}</td>
                <td className="team-name">{team.name}</td>
                <td>{team.played}</td>
                <td>{team.won}</td>
                <td>{team.drawn}</td>
                <td>{team.lost}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
                <td className="goal-difference">
                  {team.goalsFor - team.goalsAgainst > 0 ? '+' : ''}
                  {team.goalsFor - team.goalsAgainst}
                </td>
                <td className="points">{team.points}</td>
                <td className="form">
                  {team.form.map((result, index) => (
                    <span
                      key={index}
                      className="form-indicator"
                      style={{ backgroundColor: getFormColor(result) }}
                      title={getFormText(result)}
                    >
                      {getFormText(result)}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="standings-footer">
        <p><strong>PJ:</strong> Partidos Jugados | <strong>G:</strong> Ganados | <strong>E:</strong> Empatados | <strong>P:</strong> Perdidos</p>
        <p><strong>GF:</strong> Goles a Favor | <strong>GC:</strong> Goles en Contra | <strong>DG:</strong> Diferencia de Goles | <strong>Pts:</strong> Puntos</p>
        <p><strong>Forma:</strong> G = Ganado, E = Empatado, P = Perdido (últimos 5 partidos)</p>
      </div>
    </div>
  );
};

export default Standings; 