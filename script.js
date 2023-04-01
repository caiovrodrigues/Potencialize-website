let btn = document.querySelector('.menu-hamburger');
let label = document.querySelectorAll('label');

label[0].addEventListener('keyup', () => {
    if(label[0].querySelector("input").value.length >= 3){
        label[0].style.border = "1px solid #1bd741";
    }else if(label[0].querySelector("input").value.length >= 1 && label[0].querySelector("input").value.length <= 2){
        label[0].style.border = "1px solid #eb4a4a";
    }else{
        label[0].style.border = "1px solid #e9e9e9";
    }
});

let word = "";

label[1].addEventListener("keyup", (e) => {
    word = label[1].querySelector("input").value;
    if(word.includes("@") && word.includes(".") && /\s/g.test(word) == false){
        label[1].style.border = "1px solid #1bd741";
    }else if(word.length >= 1){
        label[1].style.border = "1px solid #eb4a4a";
    }else{
        label[1].style.border = "1px solid #e9e9e9";
    }
});

label[2].addEventListener('keyup', () => {
    if(label[2].querySelector("textarea").value.length >= 3){
        label[2].style.border = "1px solid #1bd741";
    }else if(label[2].querySelector("textarea").value.length >= 1 && label[2].querySelector("textarea").value.length <= 2){
        label[2].style.border = "1px solid #eb4a4a";
    }else{
        label[2].style.border = "1px solid #e9e9e9";
    }
});

btn.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('toggle');

    document.querySelector('.row1').classList.toggle('one');
    document.querySelector('.row2').classList.toggle('two');
    document.querySelector('.row3').classList.toggle('three');

});