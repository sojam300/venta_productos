const WhatsAppWeb = require('baileys') ;
var fs = require('file-system');
const client = new WhatsAppWeb() 

const helper = {};
helper.pintar = async(phone)=>{
    console.log(phone)
}
module.exports = helper;