// keys for API requests

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const keySchema = new Schema({
  dev_id: String,
  public_key: String,       // will use in the future for quick
                            // in browser slideshow prototypes
  private_key: String       
}, {collection: "api_keys"});

const Key = mongoose.model("Key", keySchema);

module.exports = Key;
