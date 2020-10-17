module.exports = function(app){

    const application = require('./routes/application');
    const mail = require('./routes/transporter');
    const resume = require('./routes/resume');

    app.use('/', application);
    app.use('/mail', mail);
    app.use('/resume', resume);

}
