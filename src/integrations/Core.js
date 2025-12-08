import emailjs from "@emailjs/browser";


// Toggle dev/prod based on env
const isDev = process.env.NODE_ENV !== "production";

export const SendEmail = async ({ to, subject, body }) => {
  if (isDev) {
    // ---- DEVELOPMENT MODE ----
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("📧 Email simulé (dev):", {
      to,
      subject,
      body,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      messageId: `mock-${Date.now()}`,
      message: "Email simulé envoyé (mode dev)",
    };
  }

  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  // ---- PRODUCTION MODE w/ EMAILJS ----
  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        to,
        subject,
        body,
      },
      publicKey // optional depending on config
    );

    return {
      success: true,
      messageId: result?.status || "emailjs-ok",
      message: "Email envoyé avec succès via EmailJS",
    };
  } catch (error) {
    console.error("❌ Erreur EmailJS :", error);

    return {
      success: false,
      messageId: null,
      message: "Échec de l'envoi de l'email",
      error,
    };
  }
};