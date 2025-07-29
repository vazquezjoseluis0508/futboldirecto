import React, { useState, useEffect } from 'react';
import './Calendar.css';

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  competition: string;
  status: 'scheduled' | 'live' | 'finished';
  homeScore?: number;
  awayScore?: number;
}

const Calendar: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Datos de ejemplo - en un proyecto real vendrían de una API
  const mockMatches: Match[] = [
    {
      id: '1',
      homeTeam: 'River Plate',
      awayTeam: 'Boca Juniors',
      date: '2024-07-15',
      time: '16:00',
      competition: 'Liga Profesional',
      status: 'scheduled'
    },
    {
      id: '2',
      homeTeam: 'Racing Club',
      awayTeam: 'Independiente',
      date: '2024-07-15',
      time: '18:30',
      competition: 'Liga Profesional',
      status: 'scheduled'
    },
    {
      id: '3',
      homeTeam: 'San Lorenzo',
      awayTeam: 'Huracán',
      date: '2024-07-16',
      time: '15:00',
      competition: 'Liga Profesional',
      status: 'scheduled'
    },
    {
      id: '4',
      homeTeam: 'Estudiantes',
      awayTeam: 'Gimnasia',
      date: '2024-07-16',
      time: '17:30',
      competition: 'Liga Profesional',
      status: 'scheduled'
    },
    {
      id: '5',
      homeTeam: 'Newell\'s',
      awayTeam: 'Rosario Central',
      date: '2024-07-17',
      time: '16:00',
      competition: 'Liga Profesional',
      status: 'scheduled'
    }
  ];

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setMatches(mockMatches);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return '#ff4444';
      case 'finished': return '#00aa00';
      default: return '#666666';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live': return 'EN VIVO';
      case 'finished': return 'FINALIZADO';
      default: return 'PROGRAMADO';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredMatches = selectedDate 
    ? matches.filter(match => match.date === selectedDate)
    : matches;

  if (loading) {
    return (
      <div className="calendar-container">
        <div className="loading">Cargando partidos...</div>
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>Calendario de Partidos</h2>
        <div className="date-filter">
          <label htmlFor="date-select">Filtrar por fecha:</label>
          <select 
            id="date-select"
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            <option value="">Todas las fechas</option>
            {Array.from(new Set(matches.map(match => match.date))).map(date => (
              <option key={date} value={date}>
                {formatDate(date)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="matches-list">
        {filteredMatches.length === 0 ? (
          <div className="no-matches">No hay partidos programados para esta fecha</div>
        ) : (
          filteredMatches.map(match => (
            <div key={match.id} className="match-card">
              <div className="match-header">
                <span className="competition">{match.competition}</span>
                <span 
                  className="status"
                  style={{ color: getStatusColor(match.status) }}
                >
                  {getStatusText(match.status)}
                </span>
              </div>
              
              <div className="match-teams">
                <div className="team home">
                  <span className="team-name">{match.homeTeam}</span>
                  {match.homeScore !== undefined && (
                    <span className="score">{match.homeScore}</span>
                  )}
                </div>
                
                <div className="match-info">
                  <div className="vs">VS</div>
                  <div className="time">{match.time}</div>
                </div>
                
                <div className="team away">
                  {match.awayScore !== undefined && (
                    <span className="score">{match.awayScore}</span>
                  )}
                  <span className="team-name">{match.awayTeam}</span>
                </div>
              </div>
              
              <div className="match-date">
                {formatDate(match.date)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Calendar; 