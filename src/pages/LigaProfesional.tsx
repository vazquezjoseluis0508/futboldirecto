import React from 'react';
import CompetitionStandings from '../components/CompetitionStandings';

const LigaProfesional: React.FC = () => {
  // Datos mock para Liga Profesional Argentina
  const ligaProfesionalTeams = [
    {
      position: 1,
      name: "River Plate",
      played: 25,
      won: 18,
      drawn: 4,
      lost: 3,
      goalsFor: 45,
      goalsAgainst: 15,
      goalDifference: 30,
      points: 58,
      form: ["W", "W", "D", "W", "W"]
    },
    {
      position: 2,
      name: "Boca Juniors",
      played: 25,
      won: 16,
      drawn: 6,
      lost: 3,
      goalsFor: 38,
      goalsAgainst: 18,
      goalDifference: 20,
      points: 54,
      form: ["W", "D", "W", "W", "D"]
    },
    {
      position: 3,
      name: "Racing Club",
      played: 25,
      won: 14,
      drawn: 7,
      lost: 4,
      goalsFor: 42,
      goalsAgainst: 22,
      goalDifference: 20,
      points: 49,
      form: ["W", "W", "L", "W", "D"]
    },
    {
      position: 4,
      name: "San Lorenzo",
      played: 25,
      won: 13,
      drawn: 8,
      lost: 4,
      goalsFor: 35,
      goalsAgainst: 20,
      goalDifference: 15,
      points: 47,
      form: ["D", "W", "W", "L", "W"]
    },
    {
      position: 5,
      name: "Defensa y Justicia",
      played: 25,
      won: 12,
      drawn: 9,
      lost: 4,
      goalsFor: 33,
      goalsAgainst: 19,
      goalDifference: 14,
      points: 45,
      form: ["W", "D", "W", "D", "W"]
    },
    {
      position: 6,
      name: "Talleres (C)",
      played: 25,
      won: 12,
      drawn: 8,
      lost: 5,
      goalsFor: 36,
      goalsAgainst: 24,
      goalDifference: 12,
      points: 44,
      form: ["L", "W", "D", "W", "W"]
    },
    {
      position: 7,
      name: "Estudiantes (LP)",
      played: 25,
      won: 11,
      drawn: 9,
      lost: 5,
      goalsFor: 32,
      goalsAgainst: 21,
      goalDifference: 11,
      points: 42,
      form: ["D", "W", "L", "W", "D"]
    },
    {
      position: 8,
      name: "Rosario Central",
      played: 25,
      won: 10,
      drawn: 10,
      lost: 5,
      goalsFor: 28,
      goalsAgainst: 22,
      goalDifference: 6,
      points: 40,
      form: ["W", "D", "W", "L", "D"]
    },
    {
      position: 9,
      name: "Argentinos Juniors",
      played: 25,
      won: 10,
      drawn: 8,
      lost: 7,
      goalsFor: 29,
      goalsAgainst: 25,
      goalDifference: 4,
      points: 38,
      form: ["L", "W", "D", "W", "L"]
    },
    {
      position: 10,
      name: "Belgrano",
      played: 25,
      won: 9,
      drawn: 9,
      lost: 7,
      goalsFor: 26,
      goalsAgainst: 24,
      goalDifference: 2,
      points: 36,
      form: ["W", "L", "D", "W", "L"]
    },
    {
      position: 11,
      name: "Lanús",
      played: 25,
      won: 9,
      drawn: 8,
      lost: 8,
      goalsFor: 27,
      goalsAgainst: 26,
      goalDifference: 1,
      points: 35,
      form: ["D", "W", "L", "D", "W"]
    },
    {
      position: 12,
      name: "Newell's Old Boys",
      played: 25,
      won: 8,
      drawn: 10,
      lost: 7,
      goalsFor: 25,
      goalsAgainst: 24,
      goalDifference: 1,
      points: 34,
      form: ["L", "D", "W", "D", "L"]
    },
    {
      position: 13,
      name: "Gimnasia (LP)",
      played: 25,
      won: 8,
      drawn: 8,
      lost: 9,
      goalsFor: 23,
      goalsAgainst: 28,
      goalDifference: -5,
      points: 32,
      form: ["W", "L", "D", "L", "W"]
    },
    {
      position: 14,
      name: "Platense",
      played: 25,
      won: 7,
      drawn: 9,
      lost: 9,
      goalsFor: 22,
      goalsAgainst: 29,
      goalDifference: -7,
      points: 30,
      form: ["L", "D", "W", "L", "D"]
    },
    {
      position: 15,
      name: "Central Córdoba (SdE)",
      played: 25,
      won: 6,
      drawn: 10,
      lost: 9,
      goalsFor: 20,
      goalsAgainst: 28,
      goalDifference: -8,
      points: 28,
      form: ["D", "L", "W", "L", "D"]
    },
    {
      position: 16,
      name: "Unión",
      played: 25,
      won: 6,
      drawn: 9,
      lost: 10,
      goalsFor: 19,
      goalsAgainst: 30,
      goalDifference: -11,
      points: 27,
      form: ["L", "D", "L", "W", "L"]
    },
    {
      position: 17,
      name: "Sarmiento (J)",
      played: 25,
      won: 5,
      drawn: 10,
      lost: 10,
      goalsFor: 18,
      goalsAgainst: 31,
      goalDifference: -13,
      points: 25,
      form: ["D", "L", "L", "W", "D"]
    },
    {
      position: 18,
      name: "Colón",
      played: 25,
      won: 4,
      drawn: 11,
      lost: 10,
      goalsFor: 17,
      goalsAgainst: 32,
      goalDifference: -15,
      points: 23,
      form: ["L", "D", "L", "D", "L"]
    },
    {
      position: 19,
      name: "Banfield",
      played: 25,
      won: 4,
      drawn: 9,
      lost: 12,
      goalsFor: 16,
      goalsAgainst: 33,
      goalDifference: -17,
      points: 21,
      form: ["L", "D", "L", "L", "D"]
    },
    {
      position: 20,
      name: "Tigre",
      played: 25,
      won: 3,
      drawn: 8,
      lost: 14,
      goalsFor: 15,
      goalsAgainst: 35,
      goalDifference: -20,
      points: 17,
      form: ["L", "L", "D", "L", "L"]
    }
  ];

  return (
    <div className="liga-profesional-page">
      <CompetitionStandings 
        competition="Liga Profesional Argentina" 
        teams={ligaProfesionalTeams} 
      />
    </div>
  );
};

export default LigaProfesional; 