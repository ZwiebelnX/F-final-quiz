export default {
  getTraineesUngroupedList: () => `/trainees/ungrouped`,
  getTrainersUngroupedList: () => `/trainers/ungrouped`,
  addTrainee: () => `/trainees`,
  deleteTrainee: (id) => `/trainees/${id}`,
  addTrainer: () => `/trainers`,
  deleteTrainer: (id) => `/trainers/${id}`,
  splitTraineeIntoTeam: () => `/team`,
  getTeamList: () => `/team/list`,
  changeTeamName: (index) => `/team/${index}/name`,
};
