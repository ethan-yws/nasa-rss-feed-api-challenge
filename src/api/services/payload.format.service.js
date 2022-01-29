const {
  convertISODateToAEST,
} = require('../utilities/format-iso-date-to-AEST');
const {
  getLatestTenEpisodes,
  getFirstTenEpisodes,
} = require('./episodes.sort.service');

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
    episodes = items.slice(0, 10).map((el) => {
      return {
        title: el.title,
        audioUrl: el.enclosure?.url,
        publishedDate: getAESTTime(el.pubDate),
      };
    });
  }

  // format payload
  return {
    title: title,
    description: description,
    episodes: episodes,
  };
};

/**
 * Convert time to AEST format
 * @param {string} time
 * @returns date string in AEST format
 */
const getAESTTime = (time) => convertISODateToAEST(new Date(time));

module.exports = { formatPayload };