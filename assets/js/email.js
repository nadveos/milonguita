function sendMail() {
    document.getElementById('contactForm').addEventListener('submit', async function (e) {
        e.preventDefault(); // Evita que el formulario se envíe normalmente

        // Obtener los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Mostrar un mensaje de carga
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = 'Enviando tu mensaje...';

        try {
            const response = await fetch('https://api.resend.com/v1/emails', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer re_H41wViTv_MLd3K9GaV5tmyEU1T5XfVkPF', // Coloca aquí tu API key de Resend
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: 'contact@tudominio.com', // Correo desde donde envías
                    to: email, // Correo del destinatario
                    subject: `Nuevo mensaje de ${name}`,
                    html: `
                        <p><strong>Nombre:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Mensaje:</strong></p>
                        <p>${message}</p>
                    `
                })
            });

            if (response.ok) {
                responseMessage.textContent = '¡Tu mensaje ha sido enviado exitosamente!';
            } else {
                responseMessage.textContent = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
            }
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            responseMessage.textContent = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
        }
    });
}

// Llamar a la función cuando se cargue el archivo
document.addEventListener('DOMContentLoaded', function () {
    sendMail();
});
