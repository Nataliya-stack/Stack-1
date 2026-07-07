// Константы вынесены отдельно на самый верх файла
const platoSelect = document.getElementById('plato-select');
const btn = document.getElementById('order-btn');
const resultBox = document.getElementById('result-box');

// Константы для чекбоксов непереносимости
const checkVegano = document.getElementById('vegano');
const checkLactosa = document.getElementById('lactosa');
const checkGluten = document.getElementById('gluten');

if (platoSelect && btn && resultBox && checkVegano && checkLactosa && checkGluten) {
    
    btn.addEventListener('click', () => {
        const plato = platoSelect.value;
        
        // Проверяем, отмечены ли чекбоксы (true / false)
        const esVegano = checkVegano.checked;
        const tieneIntoleranciaLactosa = checkLactosa.checked;
        const tieneIntoleranciaGluten = checkGluten.checked;

        // Переменная для хранения флага: может ли человек съесть блюдо
        let puedeComer = true;

        // ЛОГИКА ПРОВЕРКИ СОВМЕСТИМОСТИ:
        if (plato === 'carne') {
            // Мясо нельзя только веганам
            if (esVegano) puedeComer = false;
        } 
        else if (plato === 'pasta') {
            // Пасту нельзя веганам и при непереносимости глютена
            if (esVegano || tieneIntoleranciaGluten) puedeComer = false;
        } 
        else if (plato === 'risotto') {
            // Ризотто нельзя веганам и при непереносимости лактозы
            if (esVegano || tieneIntoleranciaLactosa) puedeComer = false;
        }

        // Оформление плашки ответа в сине-персиковой гамме (нежно-белая подложка)
        resultBox.className = "p-5 rounded-xl text-center font-bold text-base shadow-sm transition-all duration-300 bg-white/50 backdrop-blur-sm border border-black/5";

        // Вывод сообщения на экран
        if (puedeComer) {
            resultBox.textContent = "Perfecto, pedido correcto.";
            resultBox.classList.add('text-[#003d54]'); // фирменный синий
        } else {
            resultBox.textContent = "Usted no puede comer este plato.";
            resultBox.classList.add('text-[#9d174d]'); // благородный темно-розовый
        }

        resultBox.classList.remove('hidden');
        checkVegano.checked = false;       // Снимаем галочку Веган
        checkLactosa.checked = false;      // Снимаем галочку Лактоза
        checkGluten.checked = false;       // Снимаем галочку Глютен
        platoSelect.selectedIndex = 0;     // Возвращаем выбор на первое блюдо (Carne)

        // ✨ АВТОМАТИЧЕСКИЙ СБРОС через 4 секунды (4000 миллисекунд)
        setTimeout(() => {
            resultBox.classList.add('hidden'); // Скрываем надпис               
        }, 2000);
    });
}
