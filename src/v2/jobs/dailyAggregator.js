const cron = require('node-cron');
const { aggregateDataDaily } = require('../api/sales-total-summary/services');

function scheduleDailyAggregation() {
  // Schedule to run daily at midnight
  cron.schedule('0 0 * * *', () => {
    console.log('Running daily data aggregation job');
    aggregateDataDaily();
  });
}

module.exports = { scheduleDailyAggregation };
