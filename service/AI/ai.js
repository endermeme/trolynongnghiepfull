// copy from KiÃªn LÃª | https://www.facebook.com/kiinl/ | https://zero.ai.vn/js/coze.js?v=1.5

// HÃ m táº¡o ID ngáº«u nhiÃªn
function generateRandomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// HÃ m láº¥y cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// HÃ m Ä‘áº·t cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/";
}

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

/**
 * Khá»Ÿi táº¡o Coze ChatApp vÃ  nhÃºng vÃ o website.
 *
 * @param {string} chatClientId - Chat Client ID cá»§a báº¡n.
 * @param {string} botId - Bot ID cá»§a báº¡n.
 * @param {string} title - TiÃªu Ä‘á» cá»§a cá»­a sá»• chat. Máº·c Ä‘á»‹nh lÃ  "Coze".
 * @param {string} layout - Layout cá»§a cá»­a sá»• chat ("pc" hoáº·c "mobile"). Máº·c Ä‘á»‹nh lÃ  "pc".
 * @param {string} lang - NgÃ´n ngá»¯ cá»§a cá»­a sá»• chat. Máº·c Ä‘á»‹nh lÃ  "en".
 * @param {string} frameMarginBottom - Khoáº£ng cÃ¡ch dÆ°á»›i cÃ¹ng cá»§a khung chat. Máº·c Ä‘á»‹nh lÃ  "0px".
 * @param {string} frameMarginRight - Khoáº£ng cÃ¡ch bÃªn pháº£i cá»§a khung chat. Máº·c Ä‘á»‹nh lÃ  "20px".
 * @param {string} frameWith - Chiá»u rá»™ng cá»§a khung chat. Máº·c Ä‘á»‹nh lÃ  "500px".
 * @param {string} frameHeight - Chiá»u cao cá»§a khung chat. Máº·c Ä‘á»‹nh lÃ  "800px".
 */
function initCozeChatApp(chatClientId, botId, title = "Coze", layout = "pc", lang = "en", icon = "", frameMarginBottom = "0px", frameMarginRight = "20px", frameWith = "500px", frameHeight = "800px") {
    // LÆ°u trá»¯ cÃ¡c tham sá»‘ vÃ o biáº¿n global
    window.cozeChatApp = {
        chatClientId: chatClientId,
        botId: botId,
        title: title,
        layout: layout,
        lang: lang,
        icon: icon,
        frameHeight: frameHeight
    };

    // Táº¡o element style cho CSS
    const style = document.createElement('style');
    style.innerHTML = `
    #coze-chatapp-iframe {
  border: 1px solid #CCC; /* ThÃªm viá»n cho iframe */
}
    #coze-chatapp-container {
      position: fixed;
      bottom: ${frameMarginBottom};
      right: ${frameMarginRight};
      width: ${frameWith};
      height: 0;
      overflow: hidden;
      transition: height 0.3s ease;
    }

    #coze-chatapp-iframe {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: ${frameHeight};
      background: #FFF;
      border-radius: 5px;
    }
  `;
    document.head.appendChild(style);
}

// HÃ m má»Ÿ cá»­a sá»• chat
function openCozeChatPopup() {
    let conversationId = getCookie("conversationId");
    let userId = getCookie("userId");

    if (!conversationId) {
        conversationId = generateRandomId();
        setCookie("conversationId", conversationId, 365);
    }

    if (!userId) {
        userId = generateRandomId();
        setCookie("userId", userId, 365);
    }

    // Láº¥y cÃ¡c tham sá»‘ tá»« biáº¿n global
    const { chatClientId, botId, title, layout, lang, icon, frameHeight } = window.cozeChatApp;

    const params = {
        chatClientId: chatClientId,
        chatConfig: {
            bot_id: botId,
            user: userId,
            conversation_id: conversationId
        },
        componentProps: {
            title: title,
            icon: icon,
            layout: layout,
            lang: lang
        }
    };

    const paramsString = JSON.stringify(params);
    const encodedParams = encodeURIComponent(paramsString);
    const url = `https://api.coze.com/open-platform/sdk/chatapp?params=${encodedParams}`;

    // if (0 && isMobileDevice()) {
    //     window.location.href = url;
    //     return;
    // }

    // TÃ¬m container iframe
    let container = document.getElementById('coze-chatapp-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'coze-chatapp-container';
        document.body.appendChild(container);
    }

    // TÃ¬m iframe, náº¿u chÆ°a cÃ³ thÃ¬ táº¡o má»›i
    let iframe = document.getElementById('coze-chatapp-iframe');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'coze-chatapp-iframe';
        container.appendChild(iframe);
    }

    // Thay Ä‘á»•i src cá»§a iframe
    iframe.src = url;

    setTimeout(() => {
        container.style.height = frameHeight;
    }, 10);
}

// CÃ¡ch sá»­ dá»¥ng: