module.exports = function(app){

    const application = require('./routes/application');
    const mail = require('./routes/transporter');
    const resume = require('./routes/resume');
    const failure = require('./routes/failure');

    app.use('/', application);
    app.use('/mail', mail);
    app.use('/resume', resume);
    app.use('/failure', failure);

}
