import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, subject, customSubject } = await req.json();

    // 📌 Déterminer le bon sujet (si "Autre" est sélectionné)
    const finalSubject = subject === "Autre" && customSubject ? customSubject : subject;

    console.log("📩 Email en cours d'envoi avec les données :", { name, email, finalSubject, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // STARTTLS (true pour SSL sur port 465)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 📩 Email pour l'admin (toi)
    const adminMailOptions = {
      from: `"Rault Maxence - Développeur FullStack" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_USER,
      subject: `📩 ${finalSubject} - Nouveau message de ${name}`,
      headers: { "Content-Type": "text/html; charset=UTF-8" },
      html: `
        <h2>📩 Nouveau message reçu</h2>
        <p><strong>👤 Nom :</strong> ${name}</p>
        <p><strong>📧 Email :</strong> ${email}</p>
        <p><strong>📌 Objet :</strong> ${finalSubject}</p>
        <p><strong>📝 Message :</strong></p>
        <blockquote>${message}</blockquote>
      `,
    };

    // 📩 Email de confirmation pour l'utilisateur
    const userMailOptions = {
      from: `"Rault Maxence - Développeur FullStack" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: "✅ Votre message a été bien reçu",
      headers: { "Content-Type": "text/html; charset=UTF-8" },
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; max-width: 600px; margin: auto; padding: 20px; background-color: #282c34; color: #ffffff; border-radius: 10px;">
          <h2 style="color: #0ea5e9; text-align: center;">📨 Message Reçu</h2>
          <p>Bonjour <strong>${name}</strong>,</p>
          <p>Merci de m'avoir contacté ! Votre message a bien été reçu et je vous répondrai dans les plus brefs délais.</p>
          <p><strong>Objet :</strong> ${finalSubject}</p>
          <p><strong>Votre Message :</strong></p>
          <blockquote style="border-left: 3px solid #0ea5e9; padding-left: 10px;">"${message}"</blockquote>
          <p style="text-align: center; margin-top: 20px;">💻 <strong>Rault Maxence - Développeur FullStack</strong></p>
        </div>
      `,
    };

    // 📤 Envoi des emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log("✅ Emails envoyés avec succès !");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de l'email :", error);
    return NextResponse.json({ success: false, error: String(error) });
  }
}
