
var mongoose = require('mongoose');var Schema = mongoose.Schema;var Companies = new Schema({name: {type: String, required: true},tenants: [{
tenantId: {type: Schema.Types.ObjectId, required: true, ref: 'Tenants'},roleName: {type: String, required: true, default:"Owner"}}],roles: [{
name: {type: String},permissions: [{
name: {type: String},create: {type: Boolean, required: true},retrieve: {type: Boolean, required: true},update: {type: Boolean, required: true},delete: {type: Boolean, required: true}}]}]}); module.exports = mongoose.model("Companies", Companies)
