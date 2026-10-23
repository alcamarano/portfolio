const formContact = document.getElementById('formContact');
const formStatus = document.getElementById('formStatus');
const btnSubmitFormContact = document.getElementById('btnSubmitFormContact');

formContact.addEventListener("submit", async (e) => {
    e.preventDefault();
    formStatus.textContent = "Enviando...";
    btnSubmitFormContact.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: new FormData(formContact),
        });
        const data = await response.json();

        if (data.success) {
            formStatus.textContent = "Mensagem enviada! Obrigado pelo contato.";
            formContact.reset();
            if (window.hcaptcha) hcaptcha.reset();
        } else {
            formStatus.textContent = "Erro ao enviar: " + (data.message || "tente novamente.");
        }
    } catch (error) {
        formStatus.textContent = "Erro de conexão. Tente novamente.";
    } finally {
        btnSubmitFormContact.disabled = false;
    }
});