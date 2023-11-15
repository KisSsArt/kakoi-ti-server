document.addEventListener('DOMContentLoaded', function() 
{
    let option = document.createElement('div');

    option.value = questions[0].question;
    option.innerText = (questions[0].question).toUpperCase();

    document.body.appendChild(option);

    var button = document.createElement('button');
    button.textContent = 'Нажми меня!';
    button.addEventListener('click', function() {
        alert('Вы нажали на кнопку!');
        current_question++;
    });
    
    document.body.appendChild(button);
});