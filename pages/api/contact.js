export default async function sendEmail(req, res) {
  const { fullName, email, phone, projectType, projectBudget, projectDeadline, projectDescription, additionalInfo } = req.body;

  // ... valider les données du formulaire et envoyer l'email
  try {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const message = {
      to: process.env.SENDGRID_SENDER,
      from: process.env.SENDGRID_SENDER,
      subject: `Nouvelle demande de devis de ${fullName}`,
      text: `Nouvelle demande de devis de ${fullName} (${email}, ${phone}) pour un ${projectType} avec un budget de ${projectBudget} et une deadline de ${projectDeadline}. Description du projet: ${projectDescription}. Autre information: ${additionalInfo}`,
      html: `
        <p>Nouvelle demande de devis de ${fullName} (${email}, ${phone}) pour un ${projectType} avec un budget de ${projectBudget} et une deadline de ${projectDeadline}.</p>
        <p>Description du projet:</p>
        <p>${projectDescription}</p>
        <p>Autre information:</p>
        <p>${additionalInfo}</p>
      `
    }

    await sgMail.send(message)

    res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Une erreur est survenue lors de l\'envoi du message' })
  }
}
