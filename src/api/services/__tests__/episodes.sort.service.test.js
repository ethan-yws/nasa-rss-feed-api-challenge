const { sortByDateAsc, sortByDateDsc } = require('../episodes.sort.service');

const mockEpisodes = [
  { title: '1', pubDate: 'Fri, 28 Jan 2022 11:07 EST' },
  { title: '2', pubDate: 'Fri, 28 Jan 2022 10:07 EST' },
  { title: '3', pubDate: 'Sat, 29 Jan 2022 20:07 EST' },
];

const expectedEpisodesInDsc = [
  { title: '3', pubDate: 'Sat, 29 Jan 2022 20:07 EST' },
  { title: '1', pubDate: 'Fri, 28 Jan 2022 11:07 EST' },
  { title: '2', pubDate: 'Fri, 28 Jan 2022 10:07 EST' },
];

const expectedEpisodesInAsc = [
  { title: '2', pubDate: 'Fri, 28 Jan 2022 10:07 EST' },
  { title: '1', pubDate: 'Fri, 28 Jan 2022 11:07 EST' },
  { title: '3', pubDate: 'Sat, 29 Jan 2022 20:07 EST' },
];

describe('episodesSortService', () => {
  test('should sort episodes by pubDate in DSC order', () => {
    expect(sortByDateDsc(mockEpisodes)).toEqual(expectedEpisodesInDsc);
  });

  test('should sort episodes by pubDate in ASC order', () => {
    expect(sortByDateAsc(mockEpisodes)).toEqual(expectedEpisodesInAsc);
  });
});
