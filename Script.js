/* ==================================================
   SCRIPT.JS - Plataforma Aprend.IA
   Desenvolvimento Front-End - Universidade Cruzeiro do Sul
   ================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* --------------------------------------------------
       1. LÓGICA DO MINI SIMULADOR DE ESTUDOS (index.html)
       -------------------------------------------------- */
    const btnGerarPlano = document.getElementById("btnGerarPlano");
    const inputHoras = document.getElementById("horasEstudo");
    const divResultado = document.getElementById("resultadoPlano");

    if (btnGerarPlano && inputHoras && divResultado) {
        btnGerarPlano.addEventListener("click", function () {
            const horas = parseInt(inputHoras.value);

            if (isNaN(horas) || horas <= 0) {
                divResultado.innerHTML = "<p style='color: #dc2626;'>Por favor, insira um número válido de horas (maior que 0).</p>";
                return;
            }

            if (horas > 12) {
                divResultado.innerHTML = "<p style='color: #dc2626;'>Uau, isso é bastante tempo! Recomendamos no máximo 12 horas para manter a saúde mental.</p>";
                return;
            }

            let bloco1 = Math.round(horas * 0.5);
            let bloco2 = Math.round(horas * 0.3);
            let bloco3 = horas - bloco1 - bloco2;
            if (bloco3 < 1) bloco3 = 1;

            divResultado.innerHTML = `
                <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #2563eb; margin-top: 15px; text-align: left;">
                    <h4 style="color: #1e3a8a; margin-bottom: 8px;">🤖 Plano Gerado pela Aprend.IA para ${horas}h de estudo:</h4>
                    <ul style="padding-left: 20px; color: #333; margin: 0;">
                        <li><strong>${bloco1}h</strong> - Teoria e videoaulas com foco em active recall.</li>
                        <li><strong>${bloco2}h</strong> - Resolução de exercícios práticos com o Tutor IA.</li>
                        <li><strong>${bloco3}h</strong> - Revisão rápida por flashcards e tópicos.</li>
                    </ul>
                    <p style="font-size: 0.85rem; color: #666; margin-top: 10px; margin-bottom: 0;">*Bom foco nos estudos hoje!</p>
                </div>
            `;
        });
    }

    /* --------------------------------------------------
       2. VALIDAÇÃO DO FORMULÁRIO DE CONTATO (Contato.html)
       -------------------------------------------------- */
    const formContato = document.getElementById("formContato");

    if (formContato) {
        formContato.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const tipoDuvida = document.getElementById("tipoDuvida").value;

            if (nome && email && tipoDuvida) {
                alert(`Obrigado, ${nome}! Sua mensagem sobre "${tipoDuvida}" foi enviada com sucesso. Retornaremos em breve para ${email}.`);
                formContato.reset();
            } else {
                alert("Por favor, preencha todos os campos obrigatórios.");
            }
        });
    }

    /* --------------------------------------------------
       3. LÓGICA DE LOGIN (Login.html)
       -------------------------------------------------- */
    const formLogin = document.getElementById("formLogin");

    if (formLogin) {
        formLogin.addEventListener("submit", function (event) {
            event.preventDefault();
            const emailLogin = document.getElementById("emailLogin").value;
            
            if (emailLogin) {
                alert(`Login realizado com sucesso! Bem-vindo de volta, ${emailLogin}.`);
                window.location.href = "index.html"; // Redireciona para a home
            }
        });
    }

    /* --------------------------------------------------
       4. LÓGICA DE CADASTRO (Cadastro.html)
       -------------------------------------------------- */
    const formCadastro = document.getElementById("formCadastro");

    if (formCadastro) {
        formCadastro.addEventListener("submit", function (event) {
            event.preventDefault();
            const nomeCadastro = document.getElementById("nomeCadastro").value;
            const senhaCadastro = document.getElementById("senhaCadastro").value;

            // Validação simples de segurança alinhada ao pattern do HTML
            const regexSenha = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}/;

            if (!regexSenha.test(senhaCadastro)) {
                alert("A senha não atende aos requisitos de segurança mínimos (mínimo de 8 caracteres, maiúsculas, minúsculas, números e caractere especial).");
                return;
            }

            alert(`Parabéns, ${nomeCadastro}! Sua conta na Aprend.IA foi criada com sucesso. Faça seu login para continuar.`);
            window.location.href = "Login.html"; // Redireciona para a tela de login
        });
    }

});