document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. АВТОРИЗАЦІЯ (ОБРОБКА ФОРМИ)
    // ==========================================
    const authForm = document.getElementById('auth-form');

    if (authForm) {
        authForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailInput = document.querySelector('input[type="email"]').value;
            alert('Спроба входу для: ' + emailInput + '\nБаза даних у процесі розробки.');
        });
    }

    // ==========================================
    // 2. НАДІЙНИЙ ПЕРЕМИКАЧ ТЕМНОЇ ТЕМИ (ПРЯМЕ ФАРБУВАННЯ)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {
        function turnOnDark() {
            // Фон усього сайту та нижньої секції
            document.body.style.backgroundColor = "#101215";
            
            const bottomSection = document.querySelector('.bottom-section');
            if (bottomSection) bottomSection.style.backgroundColor = "#101215";

            const loadMoreContainer = document.querySelector('.load-more-container');
            if (loadMoreContainer) loadMoreContainer.style.backgroundColor = "#101215";

            // Верхня секція (банер + реєстрація)
            const topSection = document.querySelector('.top-section');
            if (topSection) topSection.style.background = "linear-gradient(135deg, #1c1f24 0%, #101215 100%)";

            // Перефарбовуємо картку реєстрації, картки постів та підвал
            const cards = document.querySelectorAll('.auth-box, .post-card, .site-footer');
            cards.forEach(card => card.style.backgroundColor = "#16181c");
            cards.forEach(card => card.style.borderColor = "#2f3336");

            const actionsBars = document.querySelectorAll('.post-actions-bar');
            actionsBars.forEach(bar => bar.style.backgroundColor = "#16181c");
            actionsBars.forEach(bar => bar.style.borderTopColor = "#2f3336");

            // Головні заголовки стають білими
            const headers = document.querySelectorAll('h1, h2, h3, h4');
            headers.forEach(h => h.style.color = "#ffffff");

            // Тексти описів, юзернейми та час
            const textGray = document.querySelectorAll('.banner-text, .username, .post-time, .post-caption, .copyright, .footer-column a, .footer-column p');
            textGray.forEach(t => t.style.color = "#8c9ba5");

            // Поля введення
            const inputs = document.querySelectorAll('#auth-form input, .chat-input-bar input');
            inputs.forEach(input => {
                input.style.backgroundColor = "#1c1f24";
                input.style.borderColor = "#2f3336";
                input.style.color = "#ffffff";
            });

            // Написи над полями (label)
            const labels = document.querySelectorAll('#auth-form label');
            labels.forEach(l => l.style.color = "#b388ff");

            // Соціальні кнопки
            const socialBtns = document.querySelectorAll('.social-btn');
            socialBtns.forEach(btn => {
                btn.style.backgroundColor = "transparent";
                btn.style.borderColor = "#2f3336";
            });

            // Елементи приватного чату
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
            // Повертаємо все до стандартних світлих CSS стилів
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

        // Перевіряємо збережений вибір користувача
        if (localStorage.getItem('dark-mode') === 'enabled') {
            turnOnDark();
        }

        // Клік по кнопці
        themeToggleBtn.addEventListener('click', function() {
            if (localStorage.getItem('dark-mode') !== 'enabled') {
                turnOnDark();
            } else {
                turnOnLight();
            }
        });
    }
});
