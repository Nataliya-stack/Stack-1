const input = document.getElementById('phrase-input');
const btn = document.getElementById('check-btn');
const resultBox = document.getElementById('result-box');

// Функция-алгоритм для проверки строки
function checkPalindrome(text) {
    const cleanText = text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9ñ]/g, '');

    const reversedText = cleanText.split('').reverse().join('');
    return cleanText === reversedText;
}

// Логика обработки клика
if (input && btn && resultBox) {
    btn.addEventListener('click', () => {
        const text = input.value.trim();
        
        if (!text) {
            alert('Por favor, escribe una frase primero.');
            return;
        }

        resultBox.className = "p-5 rounded-xl text-center font-bold text-base shadow-sm transition-all duration-300 bg-white/50 backdrop-blur-sm border border-black/5";

        if (checkPalindrome(text)) {
            resultBox.textContent = `¡Sí! "${text}" es un palíndromo.`;
            resultBox.classList.add('text-[#003d54]');
        } else {
            resultBox.textContent = `No, "${text}" no es un palíndromo.`;
            resultBox.classList.add('text-[#9d174d]');
        }

        resultBox.classList.remove('hidden');
        input.value = '';                  // Полностью стираем текст из инпута

        setTimeout(() => {
            resultBox.classList.add('hidden'); // Скрываем результат            
        }, 2000);
    });
}
