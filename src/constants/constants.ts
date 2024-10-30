export const STORAGE_KEYS = {
  LOGIN_ID: 'loginId',
  DARK_MODE: 'darkMode',
};

export const movieSections = [
  {
    id: '1',
    sortBy: 'popularity.desc',
    sectionTitle: 'Popular movies',
  },
  {
    id: '2',
    sortBy: 'vote_count.desc',
    sectionTitle: 'Most viewed',
  },
  {
    id: '3',
    sortBy: 'primary_release_date.asc',
    sectionTitle: 'Old is Gold',
  },
];

export const BUTTON_MODES = {
  FLAT: 'flat',
  SOLID: 'solid',
};
