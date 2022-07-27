const button = document.querySelector("button");
button.addEventListener("click", getFIO);

function getFIO() {
    let input = document.querySelector(".fio").value;
    
    // преобразует к нижнему регистру, в случае если пользователь ввел большими буквами
    let lowerCaseInput = input.toLowerCase();

    // удаляет пробелы в начале и конце строки
    let deleteSpaces = lowerCaseInput.trim();
    
    // делает заглавной каждую букву слова в строке 
    let newInput = deleteSpaces.replace(/[a-zа-я]+/gi, (match) => match[0].toUpperCase() + match.substr(1));

    // разбивает строку на массив 
    let array = newInput.split(" ");

    if (array.length > 2) {
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

    input = document.querySelector(".fio").value = " ";
}