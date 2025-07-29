import React from 'react';
import './CupBracket.css';

interface Match {
  id: string;
  team1: string;
  team2: string;
  date: string;
  time: string;
  status: 'scheduled' | 'confirmed' | 'completed';
  score1?: number;
  score2?: number;
}

interface CupBracketProps {
  competition: string;
  matches: {
    roundOf16: Match[];
    quarterFinals: Match[];
    semiFinals: Match[];
    final: Match;
  };
}

const CupBracket: React.FC<CupBracketProps> = ({ competition, matches }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#5a8a5a';
      case 'confirmed': return '#ffd700';
      case 'scheduled': return '#888';
      default: return '#888';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Finalizado';
      case 'confirmed': return 'Confirmado';
      case 'scheduled': return 'A confirmar';
      default: return 'A confirmar';
    }
  };

  return (
    <div className="cup-bracket">
      <div className="bracket-header">
        <h2>{competition}</h2>
        <div className="competition-info">
          <span className="season">Temporada 2024</span>
        </div>
      </div>

      <div className="bracket-container">
        <div className="bracket-grid">
          {/* Octavos de Final */}
          <div className="bracket-round">
            <h3>OCTAVOS DE FINAL</h3>
            <div className="matches-list">
              {matches.roundOf16.map((match, index) => (
                <div key={match.id} className="match-item">
                  <div className="match-teams">
                    <div className="team team1">
                      <span className="team-name">{match.team1}</span>
                      {match.score1 !== undefined && (
                        <span className="score">{match.score1}</span>
                      )}
                    </div>
                    <div className="team team2">
                      <span className="team-name">{match.team2}</span>
                      {match.score2 !== undefined && (
                        <span className="score">{match.score2}</span>
                      )}
                    </div>
                  </div>
                  <div className="match-info">
                    <span className="match-date">{match.date}</span>
                    <span className="match-time">{match.time}</span>
                    <span 
                      className="match-status"
                      style={{ color: getStatusColor(match.status) }}
                    >
                      {getStatusText(match.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cuartos de Final */}
          <div className="bracket-round">
            <h3>CUARTOS DE FINAL</h3>
            <div className="matches-list">
              {matches.quarterFinals.map((match, index) => (
                <div key={match.id} className="match-item">
                  <div className="match-teams">
                    <div className="team team1">
                      <span className="team-name">{match.team1}</span>
                      {match.score1 !== undefined && (
                        <span className="score">{match.score1}</span>
                      )}
                    </div>
                    <div className="team team2">
                      <span className="team-name">{match.team2}</span>
                      {match.score2 !== undefined && (
                        <span className="score">{match.score2}</span>
                      )}
                    </div>
                  </div>
                  <div className="match-info">
                    <span className="match-date">{match.date}</span>
                    <span className="match-time">{match.time}</span>
                    <span 
                      className="match-status"
                      style={{ color: getStatusColor(match.status) }}
                    >
                      {getStatusText(match.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Semifinales */}
          <div className="bracket-round">
            <h3>SEMIFINALES</h3>
            <div className="matches-list">
              {matches.semiFinals.map((match, index) => (
                <div key={match.id} className="match-item">
                  <div className="match-teams">
                    <div className="team team1">
                      <span className="team-name">{match.team1}</span>
                      {match.score1 !== undefined && (
                        <span className="score">{match.score1}</span>
                      )}
                    </div>
                    <div className="team team2">
                      <span className="team-name">{match.team2}</span>
                      {match.score2 !== undefined && (
                        <span className="score">{match.score2}</span>
                      )}
                    </div>
                  </div>
                  <div className="match-info">
                    <span className="match-date">{match.date}</span>
                    <span className="match-time">{match.time}</span>
                    <span 
                      className="match-status"
                      style={{ color: getStatusColor(match.status) }}
                    >
                      {getStatusText(match.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final */}
          <div className="bracket-round final">
            <h3>FINAL</h3>
            <div className="matches-list">
              <div className="match-item">
                <div className="match-teams">
                  <div className="team team1">
                    <span className="team-name">{matches.final.team1}</span>
                    {matches.final.score1 !== undefined && (
                      <span className="score">{matches.final.score1}</span>
                    )}
                  </div>
                  <div className="team team2">
                    <span className="team-name">{matches.final.team2}</span>
                    {matches.final.score2 !== undefined && (
                      <span className="score">{matches.final.score2}</span>
                    )}
                  </div>
                </div>
                <div className="match-info">
                  <span className="match-date">{matches.final.date}</span>
                  <span className="match-time">{matches.final.time}</span>
                  <span 
                    className="match-status"
                    style={{ color: getStatusColor(matches.final.status) }}
                  >
                    {getStatusText(matches.final.status)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CupBracket; 