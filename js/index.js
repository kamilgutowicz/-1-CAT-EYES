/* #1 Method without using CSS*/
document.querySelectorAll("div button")[0].addEventListener ("click", function(){
    document.querySelectorAll("ellipse")[1].setAttribute("fill", "#0000ff");
    document.querySelectorAll("ellipse")[4].setAttribute("fill", "#0000ff");
});

document.querySelectorAll("div button")[1].addEventListener ("click", function(){
    document.querySelectorAll("ellipse")[1].setAttribute("fill", "#1b6811");
    document.querySelectorAll("ellipse")[4].setAttribute("fill", "#1b6811");
});


/* #2 Method with using CSS and querySelectorAll for select buttons*/
/*document.querySelectorAll("div button")[0].addEventListener ("click", function(){
    document.querySelectorAll("ellipse")[1].classList.add("eye-color");
    document.querySelectorAll("ellipse")[4].classList.add("eye-color");
});

document.querySelectorAll("div button")[1].addEventListener ("click", function(){
    document.querySelectorAll("ellipse")[1].classList.remove("eye-color");
    document.querySelectorAll("ellipse")[4].classList.remove("eye-color");

});*/

/*#3 Method with using CSS, querySelectorAll and data data atribute for select buttons*/  

/*document.querySelector("[data-add]").addEventListener ("click", function(){
    document.querySelectorAll("ellipse")[1].classList.add("eye-color");
    document.querySelectorAll("ellipse")[4].classList.add("eye-color");
});

document.querySelector("[data-remove]").addEventListener ("click", function(){
    document.querySelectorAll("ellipse")[1].classList.remove("eye-color");
    document.querySelectorAll("ellipse")[4].classList.remove("eye-color");
})*/
