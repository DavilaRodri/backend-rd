// Función para alternar entre modo claro y oscuro
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeBtn.textContent = '🌙';
        themeBtn.title = 'Modo Oscuro';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeBtn.textContent = '☀️';
        themeBtn.title = 'Modo Claro';
    }
}

// Función para enviar la pregunta
async function enviarPregunta() {
    const preguntaInput = document.getElementById('pregunta');
    const pregunta = preguntaInput.value.trim();
    const conversation = document.getElementById('conversation');
    const contentArea = document.querySelector('.content-area');
    const welcome = document.querySelector('.welcome');
    const container = document.querySelector('.container');

    if (pregunta) {
        welcome.style.display = 'none'; // Oculta la presentación
        container.classList.add('active'); // Activa el layout final

        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.textContent = pregunta;
        conversation.appendChild(userMessage);

        const respuesta = await responderPregunta(pregunta);

        const assistantMessage = document.createElement('div');
        assistantMessage.className = 'message assistant-message';
        assistantMessage.innerHTML = respuesta.replace(/\n/g, '<br>');
        conversation.appendChild(assistantMessage);

        preguntaInput.value = '';
        conversation.classList.add('active');

        // Desplazar al final del content-area
        contentArea.scrollTop = contentArea.scrollHeight;
    }
}