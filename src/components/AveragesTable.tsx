import React, { useState, useEffect } from 'react';
import './AveragesTable.css';

interface TeamAverage {
  id: string;
  name: string;
  position: number;
  points: number;
  gamesPlayed: number;
  average: number;
  lastYearAverage: number;
  difference: number;
  status: 'safe' | 'danger' | 'promotion';
}

const AveragesTable: React.FC = () => {
  const [teams, setTeams] = useState<TeamAverage[]>([]);
  const [loading, setLoading] = useState(true);

  // Datos de ejemplo
  const mockTeams: TeamAverage[] = [
    {
      id: '1',
      name: 'River Plate',
      position: 1,
      points: 38,
      gamesPlayed: 15,
      average: 2.53,
      lastYearAverage: 2.45,
      difference: 0.08,
      status: 'safe'
    },
    {
      id: '2',
      name: 'Boca Juniors',
      position: 2,
      points: 33,
      gamesPlayed: 15,
      average: 2.20,
      lastYearAverage: 2.10,
      difference: 0.10,
      status: 'safe'
    },
    {
      id: '3',
      name: 'Racing Club',
      position: 3,
      points: 31,
      gamesPlayed: 15,
      average: 2.07,
      lastYearAverage: 1.95,
      difference: 0.12,
      status: 'safe'
    },
    {
      id: '4',
      name: 'San Lorenzo',
      position: 4,
      points: 29,
      gamesPlayed: 15,
      average: 1.93,
      lastYearAverage: 1.88,
      difference: 0.05,
      status: 'safe'
    },
    {
      id: '5',
      name: 'Independiente',
      position: 5,
      points: 27,
      gamesPlayed: 15,
      average: 1.80,
      lastYearAverage: 1.75,
      difference: 0.05,
      status: 'safe'
    },
    {
      id: '6',
      name: 'Estudiantes',
      position: 6,
      points: 26,
      gamesPlayed: 15,
      average: 1.73,
      lastYearAverage: 1.70,
      difference: 0.03,
      status: 'safe'
    },
    {
      id: '7',
      name: 'Newell\'s',
      position: 7,
      points: 25,
      gamesPlayed: 15,
      average: 1.67,
      lastYearAverage: 1.65,
      difference: 0.02,
      status: 'safe'
    },
    {
      id: '8',
      name: 'Rosario Central',
      position: 8,
      points: 24,
      gamesPlayed: 15,
      average: 1.60,
      lastYearAverage: 1.58,
      difference: 0.02,
      status: 'safe'
    },
    {
      id: '9',
      name: 'Huracán',
      position: 9,
      points: 22,
      gamesPlayed: 15,
      average: 1.47,
      lastYearAverage: 1.45,
      difference: 0.02,
      status: 'safe'
    },
    {
      id: '10',
      name: 'Gimnasia',
      position: 10,
      points: 20,
      gamesPlayed: 15,
      average: 1.33,
      lastYearAverage: 1.40,
      difference: -0.07,
      status: 'danger'
    },
    {
      id: '11',
      name: 'Arsenal',
      position: 11,
      points: 18,
      gamesPlayed: 15,
      average: 1.20,
      lastYearAverage: 1.35,
      difference: -0.15,
      status: 'danger'
    },
    {
      id: '12',
      name: 'Colón',
      position: 12,
      points: 16,
      gamesPlayed: 15,
      average: 1.07,
      lastYearAverage: 1.30,
      difference: -0.23,
      status: 'danger'
    },
    {
      id: '13',
      name: 'Aldosivi',
      position: 13,
      points: 14,
      gamesPlayed: 15,
      average: 0.93,
      lastYearAverage: 1.25,
      difference: -0.32,
      status: 'danger'
    },
    {
      id: '14',
      name: 'Patronato',
      position: 14,
      points: 12,
      gamesPlayed: 15,
      average: 0.80,
      lastYearAverage: 1.20,
      difference: -0.40,
      status: 'danger'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setTeams(mockTeams);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return '#4CAF50';
      case 'danger': return '#f44336';
      case 'promotion': return '#2196F3';
      default: return '#666666';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'safe': return 'SALVADO';
      case 'danger': return 'PELIGRO';
      case 'promotion': return 'ASCENSO';
      default: return 'NEUTRO';
    }
  };

  const getDifferenceColor = (difference: number) => {
    if (difference > 0) return '#4CAF50';
    if (difference < 0) return '#f44336';
    return '#666666';
  };

  const getDifferenceSymbol = (difference: number) => {
    if (difference > 0) return '+';
    return '';
  };

  if (loading) {
    return (
      <div className="averages-container">
        <div className="loading">Cargando tabla de promedios...</div>
      </div>
    );
  }

  return (
    <div className="averages-container">
      <div className="averages-header">
        <h2>Tabla de Promedios Anuales</h2>
        <div className="legend">
          <div className="legend-item">
            <span className="legend-color safe"></span>
            <span>Zona Segura</span>
          </div>
          <div className="legend-item">
            <span className="legend-color danger"></span>
            <span>Zona de Peligro</span>
          </div>
          <div className="legend-item">
            <span className="legend-color promotion"></span>
            <span>Zona de Ascenso</span>
          </div>
        </div>
      </div>

      <div className="averages-table">
        <table>
          <thead>
            <tr>
              <th>Pos</th>
              <th>Equipo</th>
              <th>Pts</th>
              <th>PJ</th>
              <th>Promedio</th>
              <th>Promedio 2023</th>
              <th>Diferencia</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.id} className={`status-${team.status}`}>
                <td className="position">{team.position}</td>
                <td className="team-name">{team.name}</td>
                <td>{team.points}</td>
                <td>{team.gamesPlayed}</td>
                <td className="average">{team.average.toFixed(2)}</td>
                <td className="last-year">{team.lastYearAverage.toFixed(2)}</td>
                <td 
                  className="difference"
                  style={{ color: getDifferenceColor(team.difference) }}
                >
                  {getDifferenceSymbol(team.difference)}{team.difference.toFixed(2)}
                </td>
                <td>
                  <span 
                    className="status-badge"
                    style={{ 
                      backgroundColor: getStatusColor(team.status),
                      color: 'white'
                    }}
                  >
                    {getStatusText(team.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="averages-footer">
        <p><strong>Promedio:</strong> Puntos totales divididos por partidos jugados</p>
        <p><strong>Diferencia:</strong> Comparación con el promedio del año anterior</p>
        <p><strong>Estado:</strong> Basado en la posición actual y tendencia histórica</p>
      </div>
    </div>
  );
};

export default AveragesTable; 