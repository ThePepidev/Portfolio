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

  // ---- PRODUCTION MODE w/ EMAILJS ----
  try {
    const result = await emailjs.send(
      "service_5yqdpqg",
      "template_3bpfzlf",
      {
        to,
        subject,
        body,
      },
      "WdNgemyHblSArj_Ct" // optional depending on config
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