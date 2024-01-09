const counters = document.querySelectorAll('.cart__counter')

console.log(counters)

counters.forEach(function(counter){
    const add = counter.querySelector('.add');
    const subtract = counter.querySelector('.subtract');
    const quantity = counter.querySelector('#quantity');

    console.log(add,subtract,quantity)

    add.addEventListener('click',()=>{
        quantity.value = Number(quantity.value) + 1
    })


    subtract.addEventListener('click',()=>{
        if(Number(quantity.value)>0)
        quantity.value = Number(quantity.value) - 1
    })
})



