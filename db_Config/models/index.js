const fs = require("fs");
const path = require("path");
const Mongoose = require("mongoose");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

if (config.database.url) {
  Mongoose.connect(config.database.url, config.database.options);
} else {
  const {
    MONGODB_PROTOCOL,
    MONGODB_USERNAME,
    MONGODB_PASSWORD,
    MONGODB_DATABASE,
    MONGODB_HOSTNAME,
    MONGODB_PORT,
  } = process.env;
  Mongoose.connect(
    `${MONGODB_PROTOCOL}://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOSTNAME}:${MONGODB_PORT}/${MONGODB_DATABASE}`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    }
  );
}

Mongoose.Promise = Promise;

const db = () => {
  const m = {};

  fs.readdirSync(__dirname)
    .filter((file) => {
      return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
    })
    .forEach((file) => {
      const model = require(path.resolve(__dirname, file))(Mongoose);
      m[model.modelName] = model;
    });

  return m;
};

const models = db();
const mongoose = Mongoose;

module.exports = mongoose;
module.exports.default = models;
