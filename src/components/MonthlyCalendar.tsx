import React, { useState, useEffect } from 'react';
import './MonthlyCalendar.css';

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

interface Competition {
  id: string;
  name: string;
  color: string;
  matches: Match[];
}

const MonthlyCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);

  // Datos de ejemplo
  const mockCompetitions: Competition[] = [
    {
      id: '1',
      name: 'Liga Profesional Argentina',
      color: '#4CAF50',
      matches: [
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
          date: '2024-07-20',
          time: '18:30',
          competition: 'Liga Profesional',
          status: 'scheduled'
        }
      ]
    },
    {
      id: '2',
      name: 'Copa Argentina',
      color: '#2196F3',
      matches: [
        {
          id: '3',
          homeTeam: 'San Lorenzo',
          awayTeam: 'Huracán',
          date: '2024-07-18',
          time: '15:00',
          competition: 'Copa Argentina',
          status: 'scheduled'
        }
      ]
    },
    {
      id: '3',
      name: 'Copa Libertadores',
      color: '#FF9800',
      matches: [
        {
          id: '4',
          homeTeam: 'Estudiantes',
          awayTeam: 'Gimnasia',
          date: '2024-07-25',
          time: '17:30',
          competition: 'Copa Libertadores',
          status: 'scheduled'
        }
      ]
    },
    {
      id: '4',
      name: 'Copa Sudamericana',
      color: '#9C27B0',
      matches: [
        {
          id: '5',
          homeTeam: 'Newell\'s',
          awayTeam: 'Rosario Central',
          date: '2024-07-30',
          time: '16:00',
          competition: 'Copa Sudamericana',
          status: 'scheduled'
        }
      ]
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setCompetitions(mockCompetitions);
      setLoading(false);
    }, 1000);
  }, []);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    
    // Agregar días del mes anterior para completar la primera semana
    for (let i = 0; i < firstDayOfMonth; i++) {
      const prevMonth = new Date(year, month, 0);
      const prevDay = prevMonth.getDate() - firstDayOfMonth + i + 1;
      days.push({
        date: new Date(year, month - 1, prevDay),
        isCurrentMonth: false,
        matches: []
      });
    }
    
    // Agregar días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const dateString = currentDate.toISOString().split('T')[0];
      const matches = competitions.flatMap(comp => 
        comp.matches.filter(match => match.date === dateString)
      );
      
      days.push({
        date: currentDate,
        isCurrentMonth: true,
        matches
      });
    }
    
    // Completar la última semana con días del siguiente mes
    const remainingDays = 42 - days.length; // 6 semanas * 7 días
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        matches: []
      });
    }
    
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-AR', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('es-AR', {
      month: 'long',
      year: 'numeric'
    });
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

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

  const days = getDaysInMonth(currentDate);
  const selectedMatches = selectedDate 
    ? competitions.flatMap(comp => 
        comp.matches.filter(match => match.date === selectedDate)
      )
    : [];

  if (loading) {
    return (
      <div className="monthly-calendar-container">
        <div className="loading">Cargando calendario...</div>
      </div>
    );
  }

  return (
    <div className="monthly-calendar-container">
      <div className="calendar-header">
        <h2>Calendario Mensual</h2>
        <div className="month-navigation">
          <button onClick={previousMonth} className="nav-btn">‹</button>
          <h3>{getMonthName(currentDate)}</h3>
          <button onClick={nextMonth} className="nav-btn">›</button>
        </div>
      </div>

      <div className="calendar-content">
        <div className="calendar-grid">
          <div className="weekdays">
            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
              <div key={day} className="weekday">{day}</div>
            ))}
          </div>
          
          <div className="days-grid">
            {days.map((day, index) => (
              <div
                key={index}
                className={`day ${!day.isCurrentMonth ? 'other-month' : ''} ${
                  selectedDate === day.date.toISOString().split('T')[0] ? 'selected' : ''
                }`}
                onClick={() => setSelectedDate(day.date.toISOString().split('T')[0])}
              >
                <div className="day-number">{day.date.getDate()}</div>
                {day.matches.length > 0 && (
                  <div className="matches-indicator">
                    <span className="match-count">{day.matches.length}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="competitions-sidebar">
          <h3>Competencias</h3>
          <div className="competitions-list">
            {competitions.map(competition => (
              <div key={competition.id} className="competition-item">
                <div 
                  className="competition-color" 
                  style={{ backgroundColor: competition.color }}
                ></div>
                <span className="competition-name">{competition.name}</span>
                <span className="match-count">{competition.matches.length}</span>
              </div>
            ))}
          </div>

          {selectedDate && (
            <div className="selected-date-matches">
              <h4>{formatDate(new Date(selectedDate))}</h4>
              {selectedMatches.length === 0 ? (
                <p>No hay partidos programados</p>
              ) : (
                selectedMatches.map(match => (
                  <div key={match.id} className="match-item">
                    <div className="match-header">
                      <span 
                        className="competition-badge"
                        style={{ 
                          backgroundColor: competitions.find(c => 
                            c.matches.some(m => m.id === match.id)
                          )?.color || '#666'
                        }}
                      >
                        {match.competition}
                      </span>
                      <span 
                        className="status"
                        style={{ color: getStatusColor(match.status) }}
                      >
                        {getStatusText(match.status)}
                      </span>
                    </div>
                    <div className="match-teams">
                      <span>{match.homeTeam}</span>
                      <span className="vs">vs</span>
                      <span>{match.awayTeam}</span>
                    </div>
                    <div className="match-time">{match.time}</div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonthlyCalendar; 