let toggler = document.getElementById('switch')

toggler.addEventListener('click', () => {

    // if (toggler.checked === true) {
    //     document.body.style.backgroundColor = '#000000';
    // } else {
    //     document.body.style.backgroundColor = "#ffffff";
    // }

    //same, using ternary operator

    toggler.checked ? document.body.style.backgroundColor = '#000000' : document.body.style.backgroundColor = '#ffffff'

})

