import React from 'react';
import CupBracket from '../components/CupBracket';

const CopaLibertadores: React.FC = () => {
  // Datos mock para Copa Libertadores en formato bracket
  const libertadoresMatches = {
    roundOf16: [
      {
        id: "1",
        team1: "Atlético Nacional",
        team2: "São Paulo",
        date: "12/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "2",
        team1: "LDU de Quito",
        team2: "Botafogo",
        date: "14/08",
        time: "19:00",
        status: "scheduled"
      },
      {
        id: "3",
        team1: "Libertad",
        team2: "River Plate",
        date: "14/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "4",
        team1: "Universitario",
        team2: "Palmeiras",
        date: "14/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "5",
        team1: "Fortaleza",
        team2: "Vélez Sarsfield",
        date: "12/08",
        time: "19:00",
        status: "scheduled"
      },
      {
        id: "6",
        team1: "Peñarol",
        team2: "Racing Club",
        date: "12/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "7",
        team1: "Cerro Porteño",
        team2: "Estudiantes de La Plata",
        date: "13/08",
        time: "19:00",
        status: "scheduled"
      },
      {
        id: "8",
        team1: "Flamengo",
        team2: "Internacional",
        date: "13/08",
        time: "21:30",
        status: "scheduled"
      }
    ],
    quarterFinals: [
      {
        id: "qf1",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "16/09",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "qf2",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "16/09",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "qf3",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "16/09",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "qf4",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "16/09",
        time: "00:00",
        status: "scheduled"
      }
    ],
    semiFinals: [
      {
        id: "sf1",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "21/10",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "sf2",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "21/10",
        time: "00:00",
        status: "scheduled"
      }
    ],
    final: {
      id: "final",
      team1: "A confirmar",
      team2: "A confirmar",
      date: "29/11",
      time: "21:00",
      status: "scheduled"
    }
  };

  return (
    <div className="copa-libertadores-page">
      <CupBracket 
        competition="CONMEBOL COPA LIBERTADORES" 
        matches={libertadoresMatches} 
      />
    </div>
  );
};

export default CopaLibertadores; 