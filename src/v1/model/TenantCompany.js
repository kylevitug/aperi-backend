import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tenantCompanySchema = new Schema(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TenantCompany', tenantCompanySchema);
