import React from 'react';
import MonthlyCalendar from './MonthlyCalendar';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  // Datos mock para clasificados
  const libertadoresQualified = [
    { name: "River Plate", country: "ARG", position: "1° Liga Profesional" },
    { name: "Boca Juniors", country: "ARG", position: "2° Liga Profesional" },
    { name: "Racing Club", country: "ARG", position: "3° Liga Profesional" },
    { name: "San Lorenzo", country: "ARG", position: "4° Liga Profesional" },
    { name: "Flamengo", country: "BRA", position: "1° Brasileirão" },
    { name: "Palmeiras", country: "BRA", position: "2° Brasileirão" },
    { name: "Atlético Mineiro", country: "BRA", position: "3° Brasileirão" },
    { name: "Corinthians", country: "BRA", position: "4° Brasileirão" }
  ];

  const sudamericanaQualified = [
    { name: "Defensa y Justicia", country: "ARG", position: "5° Liga Profesional" },
    { name: "Talleres (C)", country: "ARG", position: "6° Liga Profesional" },
    { name: "Estudiantes (LP)", country: "ARG", position: "7° Liga Profesional" },
    { name: "Rosario Central", country: "ARG", position: "8° Liga Profesional" },
    { name: "Fortaleza", country: "BRA", position: "5° Brasileirão" },
    { name: "Athletico Paranaense", country: "BRA", position: "6° Brasileirão" },
    { name: "São Paulo", country: "BRA", position: "7° Brasileirão" },
    { name: "Santos", country: "BRA", position: "8° Brasileirão" }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Resumen del fútbol argentino y sudamericano</p>
      </div>

      <div className="dashboard-content">
        {/* Sección de clasificados */}
        <div className="qualifications-section">
          <div className="qualifications-grid">
            {/* Copa Libertadores */}
            <div className="qualification-card libertadores">
              <div className="card-header">
                <h3>Copa Libertadores 2024</h3>
                <div className="trophy-icon libertadores-trophy">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    <path d="M12 16L10.91 22.26L4 21L10.91 20.26L12 14L13.09 20.26L20 21L13.09 22.26L12 16Z"/>
                  </svg>
                </div>
              </div>
              <div className="qualified-teams">
                <h4>Clasificados desde Argentina:</h4>
                <div className="teams-list">
                  {libertadoresQualified.slice(0, 4).map((team, index) => (
                    <div key={index} className="team-item">
                      <span className="team-name">{team.name}</span>
                      <span className="team-position">{team.position}</span>
                    </div>
                  ))}
                </div>
                <div className="more-teams">
                  <span>+ 4 equipos de Brasil y otros países</span>
                </div>
              </div>
            </div>

            {/* Copa Sudamericana */}
            <div className="qualification-card sudamericana">
              <div className="card-header">
                <h3>Copa Sudamericana 2024</h3>
                <div className="trophy-icon sudamericana-trophy">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    <path d="M12 16L10.91 22.26L4 21L10.91 20.26L12 14L13.09 20.26L20 21L13.09 22.26L12 16Z"/>
                  </svg>
                </div>
              </div>
              <div className="qualified-teams">
                <h4>Clasificados desde Argentina:</h4>
                <div className="teams-list">
                  {sudamericanaQualified.slice(0, 4).map((team, index) => (
                    <div key={index} className="team-item">
                      <span className="team-name">{team.name}</span>
                      <span className="team-position">{team.position}</span>
                    </div>
                  ))}
                </div>
                <div className="more-teams">
                  <span>+ 4 equipos de Brasil y otros países</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendario mensual */}
        <div className="calendar-section">
          <h2>Calendario de Partidos</h2>
          <p>Próximos partidos importantes del mes</p>
          <MonthlyCalendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 