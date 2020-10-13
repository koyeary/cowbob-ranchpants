module.exports = function(app){

    const application = require('./routes/application');
    const mail = require('./routes/transporter');

    app.use('/', application);
    app.use('/mail', mail);

}
