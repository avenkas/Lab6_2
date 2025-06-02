// Функція formatDate() повертає поточну дату у форматі "день_неділі, РРРР-ДД-ММ"
function formatDate() {
    let now = new Date(); // Створюємо об'єкт дати з поточним часом
    
    let daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"]; // Масив днів тижня
    
    let dayOfWeek = daysOfWeek[now.getDay()]; // Отримуємо назву поточного дня тижня
    let year = now.getFullYear(); // Отримуємо поточний рік
    let month = String(now.getMonth() + 1).padStart(2, "0"); // Отримуємо місяць, додаючи ведучий нуль
    let day = String(now.getDate()).padStart(2, "0"); // Отримуємо день, додаючи ведучий нуль
    
    return `${dayOfWeek}, ${year}-${day}-${month}`; // Форматуємо дату у відповідному вигляді
}

// Функція formatTime() повертає час у форматі "ЧЧ/ММ/СС (am/pm)"
function formatTime() {
    let now = new Date(); // Створюємо об'єкт дати
    
    let hours = now.getHours(); // Отримуємо години
    let minutes = String(now.getMinutes()).padStart(2, "0"); // Отримуємо хвилини, додаючи ведучий нуль
    let seconds = String(now.getSeconds()).padStart(2, "0"); // Отримуємо секунди, додаючи ведучий нуль
    
    let ampm = hours >= 12 ? "pm" : "am"; // Визначаємо AM або PM
    hours = hours % 12 || 12; // Конвертуємо 24-годинний формат у 12-годинний (0 стає 12)
    
    return `${String(hours).padStart(2, "0")}/${minutes}/${seconds} (${ampm})`; // Форматуємо час
}

// Функція weeksUntilNewYear() розраховує кількість тижнів до Нового року
function weeksUntilNewYear() {
    let now = new Date(); // Поточний момент часу
    let newYear = new Date(now.getFullYear() + 1, 0, 1); // Наступний Новий рік (1 січня наступного року)
    
    let diffMilliseconds = newYear - now; // Різниця між поточною датою і Новим роком у мілісекундах
    let weeks = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 7)); // Конвертуємо мілісекунди у кількість тижнів
    
    return `Тижнів до Нового року: ${weeks}`; // Повертаємо число тижнів
}

// Вивід даних у footer
document.getElementById("date").textContent = formatDate(); // Вставляємо дату у HTML
document.getElementById("time").textContent = formatTime(); // Вставляємо час у HTML
document.getElementById("weeksToNewYear").textContent = weeksUntilNewYear(); // Вставляємо тижні до Нового року у HTML

// Оновлення часу кожну секунду, щоб він змінювався динамічно
setInterval(() => {
    document.getElementById("time").textContent = formatTime(); // Оновлюємо час в інтервалі кожну секунду
}, 1000);
