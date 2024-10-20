function sendMail() {
    document.getElementById('contactForm').addEventListener('submit', async function (e) {
        e.preventDefault(); // Evita el envío normal del formulario
        const RESEND_API_KEY='re_SLWGR8Pn_P3HLeMVnNhJ6PcvPUNhjhgKA';

        // Obtener los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Mostrar mensaje de carga
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = 'Enviando tu mensaje...';
        //resend
        try {
            const response = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${RESEND_API_KEY}`,
                    
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
				// <section id="contact" class="spotlight style2 right">
				// 	<span class="image fit main"><img src="images/milonguita.jpeg" alt="" /></span>
				// 	<div class="content">
				// 		<header>
				// 			<h2>Contacto</h2>
				// 			<p>Déjanos un mensaje y te contactaremos pronto.</p>
				// 		</header>
				// 		<form id="contactForm" onsubmit="return false;">
				// 			<div class="row gtr-uniform">
				// 				<div class="col-6 col-12-xsmall">
				// 					<input type="text" name="name" id="name" placeholder="Nombre" required />
				// 				</div>
				// 				<div class="col-6 col-12-xsmall">
				// 					<input type="email" name="email" id="email" placeholder="Email" required />
				// 				</div>
				// 				<div class="col-12">
				// 					<textarea name="message" id="message" placeholder="Mensaje" rows="6" required></textarea>
				// 				</div>
				// 				<div class="col-12">
				// 					<ul class="actions">
				// 						<li><input type="submit" value="Enviar" class="primary" id="sendBtn" /></li>
				// 					</ul>
				// 				</div>
				// 			</div>
				// 		</form>
				// 		<div id="responseMessage"></div>
				// 	</div>
				// </section>