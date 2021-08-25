if (process.env.NODE_ENV === 'produciton') {
  console.log('in true', process.env.NODE_ENV);
  module.exports = require('./prod');
} else {
  console.log('in false', process.env.NODE_ENV);
  module.exports = require('./dev');
}
