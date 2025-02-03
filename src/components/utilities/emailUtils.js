export function sendEmail() {
  const email = "argeldelacruz86@gmail.com";
  const subject = encodeURIComponent("Let's Connect!");
  const body = encodeURIComponent("Hi Argel, I would like to get in touch with you.");
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  
  // Apre il client email in una nuova scheda
  window.open(mailtoLink, "_blank");
}
