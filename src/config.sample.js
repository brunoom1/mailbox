const config = {
  imap: [
    {
      account: "Interno",
      user: 'joaoeopedefeijao@local.local',
      password: '',
      host: '192.168.0.10',
      port: 143,
      tls: false
    },
    {
      account: "Externo",
      user: 'joaoeopedefeijao@local.externo',
      password: '',
      host: '192.168.0.10',
      port: 143,
      tls: false
    }
  ]
};

module.exports = config;
