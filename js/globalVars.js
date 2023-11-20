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
