const WhatsAppWeb = require('baileys') ;
var fs = require('file-system');
const client = new WhatsAppWeb() 

const apiWSP = {};
// CONECTA WHATS - SERVIDOR
apiWSP.conectApi = async (req, res) => {
        client.connectSlim()
        .then ((user) => {
            const authJSON = client.base64EncodedAuthInfo() ;
            fs.writeFileSync('./auth_info.json', JSON.stringify(authJSON, null, '\t'))
            res.jsonp({mensaje: 'Autenticación exitosa'});
        })
        .catch (err => console.log(err) )
}


// ENVIAR MENSAJES

apiWSP.sendMessage = async (phone, body) => {
    // RECONEXION
    const authJSON = JSON.parse( fs.readFileSync("./auth_info.json") );
    client.setOnUnexpectedDisconnect (err => console.log ("disconnected unexpectedly: " + err) )

   
     client.connectSlim (authJSON)    .then ((user) =>{
        console.log ("yay connected")
             // 
        options = {
            quoted: null,
            timestamp: new Date()
        }
        client.sendTextMessage(`${phone}@s.whatsapp.net`, body, options)
        .then(console.log('Notificación enviada')).catch(err=> console.log(err));
    } ).catch(err=>{
        if(err[1]=='already connected or connecting'){
            client.sendTextMessage(`${phone}@s.whatsapp.net`, body, options)
        .then( console.log('Notificación enviada YA CONECTADO')).catch(err=> console.log(err));
        }else{
            console.log(err);
        }
        
    })
    
}

module.exports = apiWSP;