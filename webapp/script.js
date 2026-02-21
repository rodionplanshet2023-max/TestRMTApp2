// Инициализация Telegram WebApp
let tg = window.Telegram.WebApp;

// Проверка инициализации
console.log("Telegram WebApp:", tg);
console.log("initData:", tg.initData);
console.log("initDataUnsafe:", tg.initDataUnsafe);

// Если нет initData - приложение открыто не через Telegram
if (!tg.initData) {
    alert("⚠️ Открой это приложение через Telegram!");
    document.body.innerHTML = '<h1>❌ Ошибка</h1><p>Открой приложение через Telegram бота!</p>';
} else {
    tg.expand();
    console.log("✅ WebApp инициализирован");
}

function sendData() {
    console.log("Кнопка нажата!");
    
    // Проверяем инициализацию
    if (!tg.initData) {
        alert("❌ Приложение не инициализировано!");
        return;
    }
    
    const data = {
        action: "test",
        message: "Привет от мини-приложения!",
        timestamp: new Date().toISOString()
    };
    
    console.log("Отправляем данные:", data);
    
    try {
        // Отправляем в бота
        tg.sendData(JSON.stringify(data));
        console.log("✅ sendData выполнена");
        
        // Показываем сообщение
        if (tg.showAlert) {
            tg.showAlert("✅ Данные отправлены!");
        } else {
            alert("✅ Данные отправлены! Проверьте чат с ботом.");
        }
    } catch (error) {
        console.error("❌ Ошибка:", error);
        alert("Ошибка: " + error.message);
    }
}
