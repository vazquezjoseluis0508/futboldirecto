import React from 'react';
import CupBracket from '../components/CupBracket';

const CopaSudamericana: React.FC = () => {
  // Datos mock para Copa Sudamericana en formato bracket
  const sudamericanaMatches = {
    roundOf16: [
      {
        id: "1",
        team1: "Defensa y Justicia",
        team2: "LDU Quito",
        date: "15/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "2",
        team1: "Ceará",
        team2: "General Caballero",
        date: "16/08",
        time: "19:00",
        status: "scheduled"
      },
      {
        id: "3",
        team1: "Atlético Goianiense",
        team2: "Deportivo Cali",
        date: "16/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "4",
        team1: "Unión La Calera",
        team2: "Sporting Cristal",
        date: "17/08",
        time: "19:00",
        status: "scheduled"
      },
      {
        id: "5",
        team1: "Guaraní",
        team2: "Always Ready",
        date: "17/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "6",
        team1: "Independiente del Valle",
        team2: "Melgar",
        date: "18/08",
        time: "19:00",
        status: "scheduled"
      },
      {
        id: "7",
        team1: "Bragantino",
        team2: "Tacuary",
        date: "18/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "8",
        team1: "Audax Italiano",
        team2: "Universitario de Sucre",
        date: "19/08",
        time: "19:00",
        status: "scheduled"
      }
    ],
    quarterFinals: [
      {
        id: "qf1",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "18/09",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "qf2",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "18/09",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "qf3",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "18/09",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "qf4",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "18/09",
        time: "00:00",
        status: "scheduled"
      }
    ],
    semiFinals: [
      {
        id: "sf1",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "23/10",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "sf2",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "23/10",
        time: "00:00",
        status: "scheduled"
      }
    ],
    final: {
      id: "final",
      team1: "A confirmar",
      team2: "A confirmar",
      date: "30/11",
      time: "21:00",
      status: "scheduled"
    }
  };

  return (
    <div className="copa-sudamericana-page">
      <CupBracket 
        competition="CONMEBOL COPA SUDAMERICANA" 
        matches={sudamericanaMatches} 
      />
    </div>
  );
};

export default CopaSudamericana; 