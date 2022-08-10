// all menu bar credit goes to Nasina7 - https://github.com/Nasina7-
//(sorry 4 stealing)
let pageArray = [
    {
        name:"Home",
        url:"/index.html"
    },
    {
        name:"About",
        url:"/about.html"
    },
    {
        name:"Cat Generator",
        url:"https://aanderson1212.github.io/catgenonline/"
    }
];

function buildMenuBar()
{
    let menuBar = document.getElementById("menuBar");
    menuBar.style.left = "0%";
    menuBar.innerHTML = "";

    let exit = document.createElement("div");

    let exitButton = document.createElement("button");
    exitButton.classList.add("menuBarButton");
    exitButton.innerHTML = "Close";

    exitButton.onclick = function(){
        menuBar.style.left = "-20%";
    };

    exit.appendChild(exitButton);
    menuBar.appendChild(exit);

    pageArray.forEach((element, index) => {
        let entry = document.createElement("div");

        let button = document.createElement("button");
        button.classList.add("menuBarButton");
        button.innerHTML = element.name;
        //let url = document.currentScript.src;
        //console.log(url);
        
        let url = window.location.pathname.lastIndexOf('/');
        url = window.location.pathname.substring(0,url);
        console.log(url);

        button.onclick = function(){
            window.location = url + element.url;
        };

        entry.appendChild(button);
        menuBar.appendChild(entry);
    });

}
function buildTopMenuBar()
{
    let topDiv = document.getElementById("topMenuBar");

    let button = document.createElement("button");
    button.innerHTML = "Menu";
    button.onclick = buildMenuBar;

    button.classList.add("menuButton");

    //button.style.borderRadius = "4px";

    topDiv.appendChild(button);

}

buildTopMenuBar();