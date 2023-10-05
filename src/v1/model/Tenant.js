const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: { type: String },
    lastName: { type: String },
    roles: {
      User: {
        type: String,
        default: 2001,
      },
      Editor: Number,
      Admin: Number,
    },
    companies: [
      {
        company: { type: Schema.Types.ObjectId, ref: 'Company' },
        roles: { type: String },
      },
    ],
    refreshToken: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tenant', tenantSchema);
