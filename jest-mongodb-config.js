module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '3.6.12', 
      skipMD5: true
    },
    autoStart: false
  }
};
