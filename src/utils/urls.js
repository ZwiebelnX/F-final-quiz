export default {
  getTraineeList: () => `/trainees/ungroupedList`,
  addTrainee: () => `/trainees`,
  splitTraineeIntoTeam: () => `/team`,
  getTeamList: () => `/team/list`,
  changeTeamName: (index) => `/team/${index}/name`
}
