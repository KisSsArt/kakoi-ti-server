function printGETparams(get)
{
    var obj = document.getElementById('main');
    for (var key in get)
        obj.innerHTML += key + " = " + get[key] + "<br>";
}

function parseGETarray()
{
    var param = new Array();
    var tmp = new Array();      // два вспомагательных
    var tmp2 = new Array();     // массива
    var get = location.search;  // строка GET запроса, то есть все данные после ?
    if (get != '') {
        tmp = (get.substring(1)).split('&');   // разделяем переменные
        for (var i = 0; i < tmp.length; i++) {
            tmp2 = tmp[i].split('=');       // массив param будет содержать
            param[tmp2[0]] = tmp2[1];       // пары ключ(имя переменной)->значение
            param.length++;
        }
        return param;
    }
    return new Array();
}

function newline()
{
    var br = document.createElement("br");
    br.innerHTML = "<br>";
    document.body.appendChild(br);
}

function printResult()
{
    let final_result = parseInt((result / 4) / 2 - 1);

    switch (username.toLowerCase())
    {
        case "kirill":
        case "кирилл":
            final_result = 6;
            break;
        case "atom":
            final_result = 5;
            break;
    }

    var funny_image = document.getElementById("funny-image");

    let result_text = document.createElement('text');
    result_text.innerHTML = "<h1> " + results[final_result].result + "</h1><br>";
    funny_image.parentNode.insertBefore(result_text, funny_image);

    let text = document.createElement('text');
    text.className = "center";
    text.innerHTML = results[final_result].text + "<br>";
    funny_image.parentNode.insertBefore(text, funny_image);

    let img = document.createElement("img");
    img.src = results[final_result].path;
    img.alt = "Это вы";
    if (username.toLowerCase() == "atom")
        img.className = "atomimg";
    else
        img.className = "img";
    funny_image.append(img);

    let wiki = document.createElement('text');
    wiki.innerHTML = results[final_result].wiki + "<br>";
    document.getElementById("wiki_text").appendChild(wiki);

    var startTestButton = document.createElement("button");
    startTestButton.textContent = "Пройти еще раз";
    startTestButton.addEventListener('click', function() { document.location = getNewLocation(start, username, 0, 0); });
    document.body.appendChild(startTestButton);
}

function getNewLocation(_start, _username, _current_question, _result)
{
    return "index.html?" + 
            "start=" + _start.toString() + "&" +
            "username=" + _username + "&" +
            "current_question=" + _current_question.toString() + "&" +
            "result=" + _result.toString();
}

function printCurrentQuestion()
{
    var centered_text = document.getElementById("centered_text");

    let text = document.createElement('text');
    text.innerHTML = "<h1>Вопрос " + (current_question + 1) + "</h1><br>";

    centered_text.parentNode.insertBefore(text, centered_text);

    let question = document.createElement('text');
    question.className = "";
    question.innerHTML = questions[current_question].question + "<br>";
    centered_text.appendChild(question);

    for (let i = 0; i < 4; i++)
    {
        if (i == 2)
            newline();

        var answer_button = document.createElement("button");
        answer_button.innerHTML = questions[current_question].answers[i];
        answer_button.className = "answer-button";
        answer_button.addEventListener('click', function() {
            ++current_question;
            result += (i + 1);
            document.location = getNewLocation(start, username, current_question, result);
        });
        document.body.appendChild(answer_button);
    }
}

function askUsername()
{
    var askName = document.createElement("text");
    askName.innerHTML = "<h1>Перед началом введите свое имя</h1><br>";
    document.body.appendChild(askName);

    let input = document.createElement('input');
    input.id = "username_input";
    input.type = "text";
    input.name = "username";
    input.placeholder = "Введите ваше имя";
    input.autocomplete = "on";
    input.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    });
    document.body.appendChild(input);

    newline();

    var startTestButton = document.createElement("button");
    startTestButton.textContent = "Подтвердить";
    startTestButton.addEventListener('click', function() {
        let username_input = document.getElementById('username_input').value.toString();
        if (username_input == "")
            alert("Введите имя!");
        document.location = getNewLocation(1, username_input, current_question, result); 
    });
    document.body.appendChild(startTestButton);
}

function startTest()
{
    var centered_text = document.getElementById("centered_text");

    var text = document.createElement("text");
    text.innerHTML = "<h1>Тест \"Какой ты сервер?\"</h1>";

    centered_text.parentNode.insertBefore(text, centered_text);

    var start = document.createElement("text");
    start.innerHTML = startText + "<br>";
    centered_text.appendChild(start);

    var startTestButton = document.createElement("button");
    startTestButton.textContent = "Начать тест!";
    startTestButton.addEventListener('click', function() { document.location = getNewLocation(1, username, current_question, result); });
    document.body.appendChild(startTestButton);
}

document.addEventListener('DOMContentLoaded', function() 
{
    var params = parseGETarray();

    if (params.length > 0)
    {
        setupGlobalVars(params);

        if (!start)
            return startTest();

        if (username == "")
            return askUsername();

        if (current_question < questions.length)
            printCurrentQuestion();
        else
            printResult();
    }
    else
    {
        document.location = getNewLocation(0, "", 0, 0);
    }
});