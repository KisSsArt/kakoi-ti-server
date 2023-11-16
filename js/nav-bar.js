function githubButton() 
{
    var button = document.createElement("button");
    button.title="git";
    button.ariaHidden = true;
    button.className = "fa fa-github fa-3x";
    button.addEventListener('click', function() { window.open("https://github.com/KisSsArt"); });
    document.getElementById("nav-form").appendChild(button);
}

document.addEventListener('DOMContentLoaded', function() { githubButton(); });