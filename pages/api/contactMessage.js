export default async function sendEmail(req, res) {
  const { fullName, email, message } = req.body;

  // ... valider les données du formulaire et envoyer l'email
  try {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

    const messageToSend = {
      to: process.env.NEXT_PUBLIC_SENDGRID_SENDER,
      from: process.env.NEXT_PUBLIC_SENDGRID_SENDER,
      subject: `Nouveau message de ${fullName}`,
      text: `Nouveau message de ${fullName} (${email}), son message: ${message}`,
      html: `
        <p>Nouveau message de ${fullName} (${email}), son message:
        <p>${message}</p>
      `
    }

    await sgMail.send(messageToSend)

    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Une erreur est survenue lors de l\'envoi du message' })
  }
}
