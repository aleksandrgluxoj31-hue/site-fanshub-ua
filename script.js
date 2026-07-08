document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. АВТОНОМНА РЕЄСТРАЦІЯ КОРИСТУВАЧІВ (EMULATION)
    // ==========================================
    const authForm = document.getElementById('auth-form');

    if (authForm) {
        authForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Зупиняємо перевантаження сторінки
            
            // Зчитуємо те, що ввів користувач у поля
            const emailInput = document.querySelector('input[type="email"]').value;
            const passwordInput = document.querySelector('input[type="password"]').value;

            // Перевірка безпеки довжини пароля
            if (passwordInput.length < 6) {
                alert('Помилка реєстрації: Пароль має бути не менше 6 символів!');
            } else {
                // Імітація успішного запиту до сервера
                alert('Успішно! На вказану пошту ' + emailInput + ' відправлено офіційний лист від FansHub для підтвердження вашого акаунта. Інтерфейс повністю готовий до запуску!');
                authForm.reset(); // Очищаємо поля форми
            }
        });
    }

    // ==========================================
    // 2. НАДІЙНИЙ ПЕРЕМИКАЧ ТЕМНОЇ ТЕМИ (ПРЯМЕ ФАРБУВАННЯ)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {
        function turnOnDark() {
            document.body.style.backgroundColor = "#101215";
            
            const bottomSection = document.querySelector('.bottom-section');
            if (bottomSection) bottomSection.style.backgroundColor = "#101215";

            const loadMoreContainer = document.querySelector('.load-more-container');
            if (loadMoreContainer) loadMoreContainer.style.backgroundColor = "#101215";

            const topSection = document.querySelector('.top-section');
            if (topSection) topSection.style.background = "linear-gradient(135deg, #1c1f24 0%, #101215 100%)";

            const cards = document.querySelectorAll('.auth-box, .post-card, .site-footer');
            cards.forEach(card => card.style.backgroundColor = "#16181c");
            cards.forEach(card => card.style.borderColor = "#2f3336");

            const actionsBars = document.querySelectorAll('.post-actions-bar');
            actionsBars.forEach(bar => bar.style.backgroundColor = "#16181c");
            actionsBars.forEach(bar => bar.style.borderTopColor = "#2f3336");

            const headers = document.querySelectorAll('h1, h2, h3, h4');
            headers.forEach(h => h.style.color = "#ffffff");

            const textGray = document.querySelectorAll('.banner-text, .username, .post-time, .post-caption, .copyright, .footer-column a, .footer-column p');
            textGray.forEach(t => t.style.color = "#8c9ba5");

            const inputs = document.querySelectorAll('#auth-form input, .chat-input-bar input');
            inputs.forEach(input => {
                input.style.backgroundColor = "#1c1f24";
                input.style.borderColor = "#2f3336";
                input.style.color = "#ffffff";
            });

            const labels = document.querySelectorAll('#auth-form label');
            labels.forEach(l => l.style.color = "#b388ff");

            const socialBtns = document.querySelectorAll('.social-btn');
            socialBtns.forEach(btn => {
                btn.style.backgroundColor = "transparent";
                btn.style.borderColor = "#2f3336";
            });

            const chatWindow = document.querySelector('.chat-window');
            if (chatWindow) chatWindow.style.borderColor = "#2f3336";

            const chatHeader = document.querySelector('.chat-header-top');
            if (chatHeader) {
                chatHeader.style.backgroundColor = "#16181c";
                chatHeader.style.borderBottomColor = "#2f3336";
            }

            const chatInputBar = document.querySelector('.chat-input-bar');
            if (chatInputBar) {
                chatInputBar.style.backgroundColor = "#16181c";
                chatInputBar.style.borderTopColor = "#2f3336";
            }

            const chatArea = document.querySelector('.chat-messages-area');
            if (chatArea) chatArea.style.backgroundColor = "#101215";

            const modelBubbles = document.querySelectorAll('.msg-bubble:not(.user-msg .msg-bubble)');
            modelBubbles.forEach(b => b.style.backgroundColor = "#16181c");

            const ppvCaptions = document.querySelectorAll('.ppv-caption');
            ppvCaptions.forEach(c => c.style.color = "#8c9ba5");

            const langSelect = document.querySelector('.language-selector select');
            if (langSelect) {
                langSelect.style.backgroundColor = "#16181c";
                langSelect.style.borderColor = "#2f3336";
            }

            themeToggleBtn.textContent = '☀️ Світла тема';
            localStorage.setItem('dark-mode', 'enabled');
        }

        function turnOnLight() {
            document.body.style.backgroundColor = "";
            
            const bottomSection = document.querySelector('.bottom-section');
            if (bottomSection) bottomSection.style.backgroundColor = "";

            const loadMoreContainer = document.querySelector('.load-more-container');
            if (loadMoreContainer) loadMoreContainer.style.backgroundColor = "";

            const topSection = document.querySelector('.top-section');
            if (topSection) topSection.style.background = "";

            const cards = document.querySelectorAll('.auth-box, .post-card, .site-footer');
            cards.forEach(card => {
                card.style.backgroundColor = "";
                card.style.borderColor = "";
            });

            const actionsBars = document.querySelectorAll('.post-actions-bar');
            actionsBars.forEach(bar => {
                bar.style.backgroundColor = "";
                bar.style.borderTopColor = "";
            });

            const headers = document.querySelectorAll('h1, h2, h3, h4');
            headers.forEach(h => h.style.color = "");

            const textGray = document.querySelectorAll('.banner-text, .username, .post-time, .post-caption, .copyright, .footer-column a, .footer-column p');
            textGray.forEach(t => t.style.color = "");

            const inputs = document.querySelectorAll('#auth-form input, .chat-input-bar input');
            inputs.forEach(input => {
                input.style.backgroundColor = "";
                input.style.borderColor = "";
                input.style.color = "";
            });

            const labels = document.querySelectorAll('#auth-form label');
            labels.forEach(l => l.style.color = "");

            const socialBtns = document.querySelectorAll('.social-btn');
            socialBtns.forEach(btn => {
                btn.style.backgroundColor = "";
                btn.style.borderColor = "";
            });

            const chatWindow = document.querySelector('.chat-window');
            if (chatWindow) chatWindow.style.borderColor = "";

            const chatHeader = document.querySelector('.chat-header-top');
            if (chatHeader) {
                chatHeader.style.backgroundColor = "";
                chatHeader.style.borderBottomColor = "";
            }

            const chatInputBar = document.querySelector('.chat-input-bar');
            if (chatInputBar) {
                chatInputBar.style.backgroundColor = "";
                chatInputBar.style.borderTopColor = "";
            }

            const chatArea = document.querySelector('.chat-messages-area');
            if (chatArea) chatArea.style.backgroundColor = "";

            const modelBubbles = document.querySelectorAll('.msg-bubble:not(.user-msg .msg-bubble)');
            modelBubbles.forEach(b => b.style.backgroundColor = "");

            const ppvCaptions = document.querySelectorAll('.ppv-caption');
            ppvCaptions.forEach(c => c.style.color = "");

            const langSelect = document.querySelector('.language-selector select');
            if (langSelect) {
                langSelect.style.backgroundColor = "";
                langSelect.style.borderColor = "";
            }

            themeToggleBtn.textContent = '🌙 Темна тема';
            localStorage.setItem('dark-mode', 'disabled');
        }

        if (localStorage.getItem('dark-mode') === 'enabled') {
            turnOnDark();
        }

        themeToggleBtn.addEventListener('click', function() {
            if (localStorage.getItem('dark-mode') !== 'enabled') {
                turnOnDark();
            } else {
                turnOnLight();
            }
        });
    }
});
