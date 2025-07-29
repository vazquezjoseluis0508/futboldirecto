import React from 'react';
import CupBracket from '../components/CupBracket';

const CopaArgentina: React.FC = () => {
  // Datos mock para Copa Argentina en formato bracket
  const argentinaMatches = {
    roundOf16: [
      {
        id: "1",
        team1: "Boca Juniors",
        team2: "Racing Club",
        date: "20/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "2",
        team1: "River Plate",
        team2: "San Lorenzo",
        date: "21/08",
        time: "19:00",
        status: "scheduled"
      },
      {
        id: "3",
        team1: "Estudiantes (LP)",
        team2: "Rosario Central",
        date: "21/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "4",
        team1: "Defensa y Justicia",
        team2: "Talleres (C)",
        date: "22/08",
        time: "19:00",
        status: "scheduled"
      },
      {
        id: "5",
        team1: "Argentinos Juniors",
        team2: "Belgrano",
        date: "22/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "6",
        team1: "Lanús",
        team2: "Newell's Old Boys",
        date: "23/08",
        time: "19:00",
        status: "scheduled"
      },
      {
        id: "7",
        team1: "Gimnasia (LP)",
        team2: "Platense",
        date: "23/08",
        time: "21:30",
        status: "scheduled"
      },
      {
        id: "8",
        team1: "Central Córdoba (SdE)",
        team2: "Unión",
        date: "24/08",
        time: "19:00",
        status: "scheduled"
      }
    ],
    quarterFinals: [
      {
        id: "qf1",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "20/09",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "qf2",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "20/09",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "qf3",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "20/09",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "qf4",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "20/09",
        time: "00:00",
        status: "scheduled"
      }
    ],
    semiFinals: [
      {
        id: "sf1",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "25/10",
        time: "00:00",
        status: "scheduled"
      },
      {
        id: "sf2",
        team1: "A confirmar",
        team2: "A confirmar",
        date: "25/10",
        time: "00:00",
        status: "scheduled"
      }
    ],
    final: {
      id: "final",
      team1: "A confirmar",
      team2: "A confirmar",
      date: "02/12",
      time: "21:00",
      status: "scheduled"
    }
  };

  return (
    <div className="copa-argentina-page">
      <CupBracket 
        competition="COPA ARGENTINA" 
        matches={argentinaMatches} 
      />
    </div>
  );
};

export default CopaArgentina; 