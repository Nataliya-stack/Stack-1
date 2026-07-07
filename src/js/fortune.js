// Константы вынесены отдельно на самый верх файла
const trigger = document.getElementById('cookie-trigger');
const btn = document.getElementById('cookie-btn');
const box = document.getElementById('fortune-box');

import imgAbierta from '../assets/icons/galletas2.png';

// Список предсказаний на испанском языке
const mensajes = [
    "La paciencia es amarga, pero su fruto es dulce.", //0
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", //1
    "No cuentes los días, haz que los días cuenten.", //2
    "Un viaje de miles de kilómetros empieza con un solo paso.", //3
    "La vida es 10% lo que nos sucede y 90% cómo reaccionamos a ello.", //4
    "No dejes que el miedo te detenga; deja que te impulse.", //5
    "Grandes cosas se logran cuando se combinan hombres y montañas.", //6
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.", //7
    "No busques el momento perfecto, busca el momento y hazlo perfecto.", //8
    "La vida es como montar en bicicleta. Para mantener el equilibrio, debes seguir adelante.", //9
    "Tu creatividad te llevará a alcanzar el éxito financiero.", //10
    "El destino no es cuestión de casualidad, sino de elección.", //11
    "El éxito no es para los que piensan en fracasar, sino para los que se atreven a soñar.", //12
    "La perseverancia es la clave del éxito.", //13
    "Una sonrisa tuya puede alegrar el día de alguien hoy.", //14
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", //15
    "No importa cuántas veces caigas, lo importante es levantarte una vez más.", //16
    "Si tú sabes lo que vales, ve y consigue lo que mereces.", //17
    "Por muy alta que sea una montaña, siempre hay un camino hacia la cima.", //18
    "El triunfo verdadero del hombre surge de las cenizas del error.",  //19
    "Lo único imposible es aquello que no intentas.",  //20
    "El 80% del éxito se basa simplemente en insistir.", //21
    "Nunca pares, nunca te conformes, hasta que lo bueno sea mejor y lo mejor excelente.", //22
    "Cuanto más hacemos, más podemos hacer.", //23
    "Da siempre lo mejor que tienes. Lo que plantes ahora, lo cosecharás más tarde.", //24
    "La tragedia no es no alcanzar tus objetivos, la tragedia es no tener objetivos que alcanzar.", //25
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", //26
    "No importa lo lento que vayas, siempre y cuando no te detengas.", //27
];

// Функция выбора случайного предсказания
function getRandomFortune() {
    const randomIdx = Math.floor(Math.random() * mensajes.length);
    return mensajes[randomIdx];
}

// Логика работы интерактива
if (trigger && btn && box) {
    function openCookie() {
        // Получаем случайную фразу
        box.textContent = getRandomFortune();
        
        // Настраиваем стили плашки ответа на лету (нежно-белая с синим текстом #003d54)
        box.className = "p-5 rounded-xl text-center font-semibold italic text-base shadow-sm bg-white/50 backdrop-blur-sm border border-black/5 text-[#003d54] flex items-center justify-center transition-all duration-300";
        
        // Добавляем печенью временную анимацию прыжка из Tailwind, чтобы клик чувствовался
        trigger.classList.add('animate-bounce');
        setTimeout(() => {
            trigger.src = imgAbierta; // Меняем изображение печенья на "открытое"
            trigger.classList.remove('animate-bounce');

        }, 1000);

        // ✨ АВТОМАТИЧЕСКИЙ СБРОС через 4 секунды
        setTimeout(() => {
            box.className = "hidden"; // Скрываем плашку с текстом
            trigger.src = 'src/assets/icons/galletas1.png'; // Возвращаем целое печенье
        }, 2000);
    }

    // Привязываем функцию и к самому печенью, и к кнопке под ним
    trigger.addEventListener('click', openCookie);
    btn.addEventListener('click', openCookie);
}
