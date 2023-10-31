new Glide('.glide',
{
    type: 'carousel',
    startAt: 0,
    perView: 3,
    focusAt: 'center',
    gap: 30,
    breakpoints: {
        991: {
            perView: 2
            },
        768: {
            perView: 1
        }
    }
}).mount();