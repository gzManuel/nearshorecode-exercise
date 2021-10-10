const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {type:String,required:true},
    amount: {type:Number, default:0, required:true},
    newUser:{type:Boolean,default:true, required:true}
});

module.exports = mongoose.model('User',userSchema);