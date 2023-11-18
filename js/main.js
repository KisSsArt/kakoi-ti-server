function printCurrentQuestion()
{
    let div = document.createElement('div');
    div.value = questions[current_question].question;
    div.innerText = questions[current_question].question;

    document.body.appendChild(div);

    for (let i = 0; i < 2; i++)
    {
        var answer_button = document.createElement("button");
        answer_button.textContent = questions[current_question].answers[i];
        answer_button.addEventListener('click', function() {
            alert('Вы нажали на кнопку!');
            if (current_question < questions.length)
                current_question++;
        });

        document.body.appendChild(answer_button);
    }
}

document.addEventListener('DOMContentLoaded', function() 
{
    printCurrentQuestion();
});