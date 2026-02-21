let tg = window.Telegram.WebApp;
tg.expand();

function sendData() {
    tg.sendData(JSON.stringify({action: "test", message: "Привет от мини-приложения!"}));
    tg.showAlert("Данные отправлены!");
}