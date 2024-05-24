// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: "burhanbaba9901@gmail.com",
      subject: "Yeni İletişim Formu Mesajı",
      text: `İsim: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return new Response(
        JSON.stringify({ message: "Mesajınız gönderildi!" }),
        { status: 200 }
      );
    } catch (error) {
      console.error("E-posta gönderim hatası:", error);
      return new Response(
        JSON.stringify({
          message: "Mesaj gönderilirken bir hata oluştu.",
          error: error.message,
        }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Request işleme hatası:", error);
    return new Response(
      JSON.stringify({ message: "Geçersiz istek.", error: error.message }),
      { status: 400 }
    );
  }
}
