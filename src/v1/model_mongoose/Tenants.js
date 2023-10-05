var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Tenants = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  refreshToken: [{ type: String }],
  companies: [{ type: Schema.Types.ObjectId, ref: 'Companies' }],
});
module.exports = mongoose.model('Tenants', Tenants);
