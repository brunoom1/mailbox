const Imap = require ('imap');
const inspect = require ('util').inspect;

const DEFAULT_BOX = 'INBOX';
const DEFAULT_ONCE_OBJECT_PARAM = {
  'ready': () => {},
  'error': () => {},
  'end': () => {}
};

class Client {

  open (config, accountIndex = 0, box = DEFAULT_BOX) {

    if (!config) throw 'config is not defined';

    this.accounts = config.imap.map(account_config => {
      return new Imap(account_config);
    });

    this.config = config;

    return this;
  }

  once (object = DEFAULT_ONCE_OBJECT_PARAM, accountIndex = 0) {
    this.accounts[accountIndex].on('ready', () => {

      object.ready();
    });

    this.accounts[accountIndex].on('end', () => {

      object.end();
    });

    this.accounts[accountIndex].on('error', () => {

      object.error();
    });

    return this;
  }

  connect (accountIndex = 0) {
    this.accounts[accountIndex].connect();
    return this;
  }

}

module.exports = Client;
