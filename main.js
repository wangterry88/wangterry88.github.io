document.addEventListener("DOMContentLoaded", () => {
    // 1. 初始化並套用 localStorage 儲存的語言設定
    const savedLang = localStorage.getItem('site_language') || 'lang-zh';
    setLanguage(savedLang);

    // 2. 標示當前所在的導覽列按鈕 (活躍狀態)
    // 取得當前網址路徑中的檔案名稱
    let currentPath = window.location.pathname.split('/').pop();
    if (!currentPath || currentPath === '') {
        currentPath = 'index.html'; // 預設首頁
    }
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        // 判斷當前頁面是否與 href 相符
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// 設定全站語言的核心邏輯
function setLanguage(lang) {
    const body = document.body;
    const btnZh = document.getElementById('btn-zh');
    const btnEn = document.getElementById('btn-en');
    
    if (lang === 'lang-en') {
        body.classList.remove('lang-zh');
        body.classList.add('lang-en');
        if(btnZh && btnEn) {
            btnZh.classList.remove('active');
            btnZh.classList.add('inactive');
            btnEn.classList.remove('inactive');
            btnEn.classList.add('active');
        }
    } else {
        body.classList.remove('lang-en');
        body.classList.add('lang-zh');
        if(btnZh && btnEn) {
            btnEn.classList.remove('active');
            btnEn.classList.add('inactive');
            btnZh.classList.remove('inactive');
            btnZh.classList.add('active');
        }
    }
    
    // 將選擇的語言儲存到瀏覽器 localStorage，實現跨頁面記憶
    localStorage.setItem('site_language', lang);
}

// 點擊按鈕時觸發的切換函式
function toggleLanguage() {
    const isEn = document.body.classList.contains('lang-en');
    setLanguage(isEn ? 'lang-zh' : 'lang-en');
}
