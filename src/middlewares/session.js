const session = require('cookie-session');

function initSession(){
    return session({
        secret: "user_secret_session"
    })   
};


module.exports={
    initSession
}