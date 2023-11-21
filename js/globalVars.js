let start = 0;
let username = String("");
let current_question = 0;
let result = 0;

function setupGlobalVars(params)
{
    start = parseInt(params["start"]);
    username = params["username"];
    current_question = parseInt(params["current_question"]);
    result = parseInt(params["result"]);
}

let startText = "Иногда хочется на все забить и просто взять входящие запросы и весь день отклонять их. Ну или строить коварные планы о падении. Давай узнаем, какой ты сервер?";
