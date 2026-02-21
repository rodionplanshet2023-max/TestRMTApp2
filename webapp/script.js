// Инициализация Telegram WebApp
let tg = window.Telegram.WebApp;

// Расширяем приложение на весь экран
tg.expand();

// Показываем основную кнопку
tg.MainButton.setText("Отправить данные");
tg.MainButton.show();

// Отправка данных при нажатии на кнопку
tg.MainButton.onClick(function() {
    const data = {
        action: "test",
        message: "Привет от мини-приложения!",
        timestamp: new Date().toISOString()
    };
    
    // Отправляем данные в бота
    tg.sendData(JSON.stringify(data));
    
    // Показываем уведомление
    tg.showAlert("Данные отправлены в бота!");
});

// Также можно отправлять по нажатию на свою кнопку
function sendData() {
    const data = {
        action: "test",
        message: "Привет от мини-приложения!",
        timestamp: new Date().toISOString()
    };
    
    tg.sendData(JSON.stringify(data));
    tg.showAlert("Данные отправлены в бота!");
}

// Показываем информацию о пользователе
const user = tg.initDataUnsafe?.user;
if (user) {
    console.log("Пользователь:", user);
}

// Настраиваем цвета под тему Telegram
document.body.style.backgroundColor = tg.themeParams.bg_color || '#ffffff';
document.body.style.color = tg.themeParams.text_color || '#000000';
