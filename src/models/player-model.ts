export interface PlayerModel {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  statistics: {
    Overall: number;
    Pace: number;
    Shooting: number;
    Passing: number;
    Dribbling: number;
    Defending: number;
    Physical: number;
  };
}



// {
//   "id": 999,
//   "name": "Raphael Pimenta",
//   "club": "TIMAO EOOO",
//   "nationality": "Brasil",
//   "position": "Atacante NATO",
//   "statistics": {
//     "Overall": 99,
//     "Pace": 50,
//     "Shooting": 50,
//     "Passing": 50,
//     "Dribbling": 50,
//     "Defending": 50,
//     "Physical": 50
//   };
// }