function sendMail() {
    document.getElementById('contactForm').addEventListener('submit', async function (e) {
        e.preventDefault();
    
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const responseMessage = document.getElementById('responseMessage');
    
        try {
            const response = await fetch('https://milonguita.com.ar/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });
    
            const result = await response.json();
            if (response.ok) {
                responseMessage.textContent = '¡Tu mensaje ha sido enviado exitosamente!';
                document.getElementById('contactForm').reset();
            } else {
                responseMessage.textContent = `Error: ${result.error}`;
            }
        } catch (error) {
            responseMessage.textContent = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
        }
    });
    
}

// Llamar a la función cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
    sendMail();
});
				