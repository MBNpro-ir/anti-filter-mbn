const mybutton = document.getElementById('mybtn')

window.onscroll = function() {scrollfunction()};

function scrollfunction () {
    if (document.body.scrollTop) > 100 || document.documentElement > 100) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener('click'), () => {
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;
}