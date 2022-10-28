/*---------navigation menu---------------


(()=>{

    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
        navMenu.classList.add("open");
        bodyScrollingToggle();

    }

    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();

    }

    function fadeOutEffect(){

        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() =>{

            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }

    //attach and event handler to document

    document.addEventListener("click", (event)=>{
        if(event.target.classList.contains('link-item')){
            // make sure event.target has a value before overriding
            if(event.target.hash !==""){
                event.preventDefault();
                const hash = event.target.hash;

                // desactivate existing active section
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");

                //activate new section
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");

                // desactivate existing active navigation menu link item
                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");


                //if clicked link item is contained withing the nav menu
                if(navMenu.classList.contains("open")){
                // active navigation menu link item
                event.target.classList.add("active","inner-shadow");
                event.target.classList.remove("outer-shadow","hover-in-shadow");

                //hide nav menu
                hideNavMenu();
                }
                else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) =>{
                        if(hasg === item.hash){

                         item.classList.add("active","inner-shadow");
                         item.classList.remove("outer-shadow","hover-in-shadow");
                        }

                    })
                    fadeOutEffect();
                }
                //add hash to url
                window.location.hash = hash;
            }

        }


    })


})();



console.log('bonjour');

function showResponsiveMenu() {
    var menu = document.getElementById("topnav_responsive_menu");
    var icon = document.getElementById("topnav_hamburger_icon");
    var root = document.getElementById("root");
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}

*/

/*---------Des roll---------------*/
let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        let dieThreeValue = Math.floor(Math.random()*6);
        let dieFourValue = Math.floor(Math.random()*6);
        let dieFiveValue = Math.floor(Math.random()*6);
        let dieSixValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue,dieThreeValue,dieFourValue,dieFiveValue,dieSixValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#die-3").setAttribute("src", images[dieThreeValue]);
        document.querySelector("#die-4").setAttribute("src", images[dieFourValue]);
        document.querySelector("#die-5").setAttribute("src", images[dieFiveValue]);
        document.querySelector("#die-6").setAttribute("src", images[dieSixValue]);
        document.querySelector("#total").innerHTML = "Total des dés blanc : " + ( (dieOneValue +1) + (dieTwoValue + 1) );
    },
    1000
    );
}
roll();



$(function () {
    var storage, scores;
    var values = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78];

    var calculateTotal = function () {
        var red = $(".red .number").prev("input:checked").length;
        var yellow = $(".yellow .number").prev("input:checked").length;
        var green = $(".green .number").prev("input:checked").length;
        var blue = $(".blue .number").prev("input:checked").length;
        var strikes = $(".strikes").find("input:checked").length;

        if ($(".red .lock + input:checked").length) red += 1;
        if ($(".yellow .lock + input:checked").length) yellow += 1;
        if ($(".green .lock + input:checked").length) green += 1;
        if ($(".blue .lock + input:checked").length) blue += 1;

        red = red > 0 ? values[red - 1] : 0;
        yellow = yellow > 0 ? values[yellow - 1] : 0;
        green = green > 0 ? values[green - 1] : 0;
        blue = blue > 0 ? values[blue - 1] : 0;

        $(".total h2").text(red + yellow + green + blue + strikes * -5);
    };

    var loadScores = function () {
        storage = window.localStorage;
        scores = JSON.parse(storage.getItem("quixx-online"));
        if (scores) {
            for (var key in scores) {
                $("input#" + key).prop("checked", scores[key]);
            }

            calculateTotal();
        } else {
            scores = {};
        }
    };

    var onChange = function (event) {
        var checkbox = event.currentTarget;
        if ($(checkbox).prev().hasClass("lock")) {
            if (
                checkbox.checked &&
                $(checkbox).nextAll("input:checked").length < 5
            ) {
                checkbox.checked = false;
                return false;
            }
        }

        scores[checkbox.id] = checkbox.checked;
        storage.setItem("quixx-online", JSON.stringify(scores));
        calculateTotal();
    };

    var onScoreChange = function (event) {
        if (event) onChange(event);

        $('.board input[type="checkbox"]').prop("disabled", false);
        $('.board input[type="checkbox"]:checked')
            .nextAll("input")
            .prop("disabled", true);
    };

    loadScores();
    onScoreChange();

    $(".board").on("change", 'input[type="checkbox"]', onScoreChange);
    $(".strikes").on("change", 'input[type="checkbox"]', onChange);
    $("button.new").on("click", function () {
        storage.clear();
        window.location.reload();
    });
});

function resize() {
    const vh = `${window.innerHeight * 0.01}px`;
    document.documentElement.style.setProperty("--vh", vh);
}

resize();
window.addEventListener("resize", resize);