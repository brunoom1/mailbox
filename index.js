const Client = require('./src/client.js')
const config = require ('./src/config.js')

const cli = new Client();

cli.open(config).once({
  ready: function () {
    console.log(';-) | ');

    this.end();
  },
  error: function (err) {
    console.log(':-( | ' + err);
  },
  end: function () {
    console.log(':-/ | ');
  }
});

//
// imap.once('ready', () => {});
// imap.once('error', () => {});
// imap.once('end', () => {});

cli.connect();
