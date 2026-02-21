// Инициализация Telegram WebApp
let tg = window.Telegram.WebApp;
tg.expand();

console.log("🚀 Мини-приложение загружено");
console.log("Telegram WebApp версия:", tg.version);
console.log("initData:", tg.initData);

function sendData() {
    console.log("📤 Отправка данных...");
    
    const data = {
        action: "test",
        message: "Привет от мини-приложения!",
        timestamp: new Date().toISOString()
    };
    
    console.log("Данные для отправки:", data);
    
    try {
        // Отправляем в бота
        tg.sendData(JSON.stringify(data));
        console.log("✅ Данные отправлены через tg.sendData()");
        
        // Простое уведомление
        alert("✅ Данные отправлены! Проверьте чат с ботом.");
        
    } catch (error) {
        console.error("❌ Ошибка отправки:", error);
        alert("❌ Ошибка: " + error.message);
    }
}

// Тест при загрузке
console.log("Telegram WebApp доступен:", !!tg);
console.log("Метод sendData доступен:", typeof tg.sendData === 'function');
