function sendMail() {
    document.getElementById('contactForm').addEventListener('submit', async function (e) {
        e.preventDefault(); // Evita el envío normal del formulario

        // Obtener los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Mostrar mensaje de carga
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = 'Enviando tu mensaje...';

        try {
            const response = await fetch('https://mailermilonguita.meapp.com.ar:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            });

            if (response.ok) {
                responseMessage.textContent = '¡Tu mensaje ha sido enviado exitosamente!';
                // Limpiar el formulario después de enviar el mensaje
                document.getElementById('contactForm').reset();
            } else {
                responseMessage.textContent = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
            }
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            responseMessage.textContent = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
        }
    });
}

// Llamar a la función cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
    sendMail();
});
