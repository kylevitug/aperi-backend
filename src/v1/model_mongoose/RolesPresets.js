
var mongoose = require('mongoose');var Schema = mongoose.Schema;var RolesPresets = new Schema({name: {type: String, required: true},permissions: [{
name: {type: String, required: true},create: {type: Boolean, required: true},update: {type: Boolean, required: true},retrieve: {type: Boolean, required: true},delete: {type: Boolean, required: true}}]}); module.exports = mongoose.model("RolesPresets", RolesPresets)
