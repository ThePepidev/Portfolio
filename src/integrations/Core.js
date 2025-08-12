// Mock email service for development
export const SendEmail = async ({ to, subject, body }) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In development, just log the email instead of sending
  console.log("📧 Email simulé envoyé:", {
    to,
    subject,
    body,
    timestamp: new Date().toISOString(),
  });

  // Simulate success
  return {
    success: true,
    messageId: `mock-${Date.now()}`,
    message: "Email envoyé avec succès (mode développement)",
  };

  // In production, you would integrate with a real email service like:
  // - EmailJS
  // - SendGrid
  // - Mailgun
  // - AWS SES
  // etc.
};
