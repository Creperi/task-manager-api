const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRIDAPI_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'elias84631@gmail.com',
        subjet: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how to get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'elias84631@gmail.com',
        subjet: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}