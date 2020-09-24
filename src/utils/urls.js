export default {
  getTraineeList: () => `/trainees/ungroupedList`,
  addTrainee: () => `/trainees`,
  deleteTrainee: (id) => `/trainees/${id}`,
  addTrainer: () => `/trainers`,
  splitTraineeIntoTeam: () => `/team`,
  getTeamList: () => `/team/list`,
  changeTeamName: (index) => `/team/${index}/name`,
};
