[style.css](https://github.com/user-attachments/files/31555589/style.css)
/* ==========================================================================
   1. ГЛОБАЛЬНЫЕ СТИЛИ (ОБНУЛЕНИЕ И ШРИФТЫ)
   ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: #f4f6f8;
    color: #242529;
    transition: background-color 0.3s ease, color 0.3s ease;
}

a {
    color: #00aff0;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

input, textarea, select {
    font-family: inherit;
    border-radius: 6px;
    outline: none;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

/* Общие стили для кнопок */
.primary-btn {
    width: 100%;
    background-color: #00aff0;
    color: white;
    border: none;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    margin-bottom: 15px;
}

.primary-btn:hover {
    background-color: #008ec2;
}

/* ==========================================================================
   2. ГЛАВНАЯ СТРАНИЦА: ВЕРХНЯЯ СЕКЦИЯ (РЕГИСТРАЦИЯ И БАННЕР)
   ========================================================================== */
.top-section {
    background: linear-gradient(135deg, #f4f6f8 0%, #e9ecef 100%);
    padding: 60px 20px;
    border-bottom: 1px solid #d8e1e6;
    transition: background 0.3s ease;
}

.top-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    gap: 40px;
    align-items: center;
}

/* Форма авторизации */
.auth-box {
    background: white;
    padding: 35px;
    border-radius: 16px;
    width: 380px;
    border: 1px solid #d8e1e6;
    box-shadow: 0 10px 25px rgba(0,0,0,0.03);
}

.brand-logo {
    font-size: 32px;
    font-weight: 900;
    color: #00aff0;
    margin-bottom: 15px;
    letter-spacing: -1px;
}

.auth-box h3 {
    font-size: 18px;
    margin-bottom: 25px;
    color: #242529;
}

.input-group {
    margin-bottom: 15px;
}

.auth-box input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #d8e1e6;
    font-size: 15px;
    background-color: #f8f9fa;
}

.social-login {
    display: flex;
    gap: 10px;
}

.social-btn {
    flex: 1;
    padding: 10px;
    border: 1px solid #d8e1e6;
    background: white;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
}

/* Рекламный баннер справа */
.banner-box {
    flex: 1;
}

.ad-badge {
    background-color: #ff5a5f;
    color: white;
    display: inline-block;
    padding: 4px 8px;
    font-size: 11px;
    font-weight: bold;
    border-radius: 4px;
    margin-bottom: 15px;
}

.banner-box h1 {
    font-size: 38px;
    font-weight: 800;
    margin-bottom: 15px;
    line-height: 1.2;
}

.banner-text {
    font-size: 16px;
    color: #5a6573;
    line-height: 1.5;
    margin-bottom: 25px;
}

.ad-banner-mock {
    background: linear-gradient(45deg, #b388ff, #ff80ab);
    padding: 15px;
    border-radius: 12px;
    color: white;
    font-weight: bold;
    text-align: center;
    box-shadow: 0 4px 15px rgba(179,136,255,0.3);
}

/* ==========================================================================
   3. ГЛАВНАЯ СТРАНИЦА: НИЖНЯЯ СЕКЦИЯ (ЛЕНТА ПОСТОВ)
   ========================================================================== */
.bottom-section {
    max-width: 650px;
    margin: 40px auto;
    padding: 0 20px;
}

.bottom-section h2 {
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: 700;
}

.feed-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.post-card {
    background: white;
    border: 1px solid #d8e1e6;
    border-radius: 16px;
    overflow: hidden;
}

.profile-banner-container {
    height: 140px;
    overflow: hidden;
    background-color: #e9ecef;
}

.profile-banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.post-content-wrapper {
    padding: 15px;
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.post-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.post-mini-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.post-user-info h4 {
    font-size: 15px;
    font-weight: bold;
}

.verified-badge {
    color: #00aff0;
    font-size: 14px;
}

.username {
    font-size: 13px;
    color: #8c9ba5;
}

.post-time {
    font-size: 13px;
    color: #8c9ba5;
}

.post-caption {
    font-size: 15px;
    line-height: 1.4;
}

/* Размытие для платного/закрытого контента */
.media-lock-container {
    position: relative;
    height: 400px;
    background-color: #000;
    overflow: hidden;
}

.locked-media {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(25px) brightness(0.6);
    transform: scale(1.1);
}

.lock-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 15px;
}

.lock-icon {
    font-size: 40px;
}

.lock-text {
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(0,0,0,0.6);
    padding: 8px 16px;
    border-radius: 20px;
}

/* Открытый видеоплеер */
.video-container {
    width: 100%;
    background-color: #000;
}

.open-video {
    width: 100%;
    max-height: 450px;
    display: block;
    object-fit: contain;
}

/* Нижняя панель действий (Лайки, комменты) */
.post-actions-bar {
    display: flex;
    border-top: 1px solid #d8e1e6;
    padding: 10px 15px;
    gap: 20px;
}

.action-item {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    color: #5a6573;
}

.action-item:hover {
    color: #00aff0;
}

/* Кнопка Показать еще */
.load-more-container {
    text-align: center;
    margin: 40px 0;
}

.load-more-btn {
    background: transparent;
    border: 1px solid #00aff0;
    color: #00aff0;
    padding: 10px 30px;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
}

.load-more-btn:hover {
    background-color: rgba(0,175,240,0.05);
}

/* ==========================================================================
   4. СТРАНИЦА: ПРИВАТНЫЙ VIP ЧАТ (`chat.html`)
   ========================================================================== */
.chat-window {
    background-color: #ffffff;
    border: 1px solid #d8e1e6;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 600px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}

.chat-header-top {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;
    border-bottom: 1px solid #d8e1e6;
    background-color: #ffffff;
}

.chat-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
}

.chat-title {
    font-size: 16px;
    font-weight: bold;
    color: #242529;
}

.online-indicator {
    font-size: 12px;
    color: #4caf50;
    display: block;
    font-weight: 600;
}

.chat-messages-area {
    flex: 1;
    background-color: #f8f9fa;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.msg-row {
    display: flex;
    gap: 12px;
    max-width: 85%;
}

.model-msg {
    align-self: flex-start;
}

.user-msg {
    align-self: flex-end;
    flex-direction: row-reverse;
}

.msg-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
}

.msg-bubble {
    background-color: #ffffff;
    padding: 12px 16px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 1.4;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
    color: #242529;
}

.user-msg .msg-bubble {
    background-color: #00aff0;
    color: white !important;
}

/* Платный блок разблокировки (PPV в чате) */
.ppv-bubble {
    padding: 8px !important;
    width: 280px;
}

.ppv-lock-media {
    position: relative;
    height: 180px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #000;
}

.ppv-blur-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(15px) brightness(0.7);
}

.ppv-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 10px;
    text-align: center;
}

.ppv-icon {
    font-size: 24px;
    margin-bottom: 5px;
}

.ppv-price {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
}

.ppv-unlock-btn {
    background-color: #00aff0;
    color: white;
    border: none;
    padding: 6px 14px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
}

.ppv-caption {
    font-size: 13px;
    margin-top: 8px;
    padding: 0 5px;
}

/* Нижняя панель чата */
.chat-input-bar {
    display: flex;
    padding: 15px;
    background-color: #ffffff;
    border-top: 1px solid #d8e1e6;
    gap: 10px;
    align-items: center;
}

.chat-input-bar input {
    flex: 1;
    padding: 12px 18px;
    border: 1px solid #d8e1e6;
    font-size: 14px;
    background-color: #f8f9fa;
}

.send-msg-btn {
    background-color: #00aff0 !important;
    color: white !important;
    border: none !important;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* ==========================================================================
   5. СТРАНИЦА: КАБИНЕТ МОДЕЛИ / ПАНЕЛЬ АВТОРА (`dashboard.html`)
