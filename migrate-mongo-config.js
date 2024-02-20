require("dotenv").config();

const config = {
  mongodb: {
    url: process.env.CONNECTIONSTRING,   
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    }
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog", 
  migrationFileExtension: ".js",
  useFileHash: false,

  moduleSystem: 'commonjs',
};

module.exports = config;
