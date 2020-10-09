module.exports = function(app){

    const mail = require('./routes/mail');
    const application = require('./routes/application');


    app.use('/', application);
    app.use('/mail', mail);

}
