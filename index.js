let fio = document.createElement("div");
fio.classList.add("container");
fio.innerHTML = `<label for="fio">Пожалуйста, введите ФИО:
<input class="fio" id="fio" type="text" />
<button type="button">Готово</button></label>`;
document.body.append(fio);

let result;

const button = document.querySelector("button");
button.addEventListener("click", getFIO);

function getFIO() {
    if (result) {
    button.addEventListener("click", () => {
    result.remove();
    });
    }

    let input = document.querySelector(".fio").value;

    // преобразует к нижнему регистру, удаляет пробелы в начале и конце строки и делает заглавной каждую букву слова в строке
    let convertInput = input.toLowerCase().trim().replace(/[a-zа-я]+/gi, (match) => match[0].toUpperCase() + match.substr(1));

    // разбивает строку на массив 
    
    let array = convertInput.split(" ");
    
    if (array.length > 2) {
        result = document.createElement("div");
        result.classList.add("result");
        result.innerHTML = `<div>
        <label for="surname">Фамилия:</label>
        <input class="surname" type="text" id="surname" /></div>
        <div><label for="name">Имя:</label>
        <input class="name" type="text" id="name" /></div>
        <div><label for="middle-name">Отчество:</label>
        <input class="middle-name" type="text" id="middle-name" /></div>`;
        document.body.append(result);
        
        let i = 0;
        getData(".surname");
        i++;
        getData(".name");
        i++

        getData(".middle-name");
        function getData(n) {
        document.querySelector(n).value = array[i];   
        }
    }
    else {
        return 0;
    }
    
    input = document.querySelector(".fio").value = "";   
}