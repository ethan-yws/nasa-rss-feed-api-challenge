const {
  convertISODateToAEST,
} = require('../utilities/format-iso-date-to-AEST');
const {
  getLatestTenEpisodes,
  getFirstTenEpisodes,
} = require('./episodes.sort.service');

/**
 * formatting rssData to payload we need
 * @param rssData
 * @param order
 * @returns
 */
const formatPayload = (rssData, order) => {
  // destructure the data we need from rssData
  const { title, description, items } = rssData;

  // get the 10 episodes by different order
  let episodes;
  // when order=dsc
  if (order === 'dsc') {
    episodes = getLatestTenEpisodes(items);
  } else if (order === 'asc') {
    // when order=asc
    episodes = getFirstTenEpisodes(items);
  } else {
    // when no order required
    episodes = items.slice(0, 10);
  }

  // format payload
  episodes = episodes.map((el) => {
    return {
      title: el.title,
      audioUrl: el.enclosure?.url,
      publishedDate: getAESTTime(el.pubDate),
    };
  });

  return {
    title,
    description,
    episodes,
  };
};

/**
 * Convert time to AEST format
 * @param {string} time
 * @returns date string in AEST format
 */
const getAESTTime = (time) => convertISODateToAEST(new Date(time));

module.exports = { formatPayload };
