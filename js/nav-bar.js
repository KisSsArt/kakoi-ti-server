function githubButton() 
{
    var button = document.createElement("git-button");
    button.title="git";
    button.ariaHidden = true;
    button.className = "git-button fa fa-github fa-3x";
    button.addEventListener('click', function() { document.location = "https://github.com/KisSsArt"; });
    document.getElementById("nav-form").appendChild(button);
}

document.addEventListener('DOMContentLoaded', function() { githubButton(); });