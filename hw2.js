//https://forum.itvdn.com/t/typescript-domashnie-zadaniya/3436
var icecream = {
    'small': {
        'price': 10
    },
    'big': {
        'price': 25,
        'toppings': {
            'chocolate': 5,
            'caramel': 6,
            'berry': 10
        }
    },
    'marmalow': {
        'price': 5
    }
};
var price = 0;
var buyIcecream = function () {
    // price: 0;
    var type = prompt('Ice cream type (small: 10грн, big: 25грн?', 'small');
    switch (type) {
        case 'small':
            price = price + icecream.small.price;
            console.log(price);
            break;
        case 'big':
            price = price + icecream.big.price + choseDetails();
            console.log(price);
            break;
    }
    var marmalow = prompt('Do you need marmalow: +5грн ( yes, no)?');
    if (marmalow == 'yes') {
        price = price + icecream.marmalow.price;
        console.log(price);
    }
    console.log(price);
    alert("Ice cream price = " + price);
};
var choseDetails = function () {
    var toppingsPrice = 0;
    var toppingsList = prompt('Choose toppings. Available: chocolate: +5грн, caramel: +6грн, berry: +10грн.', 'chocolate');
    var countToppingPrice = function () {
        var toppingsArr = toppingsList.split(', ');
        for (var i = 0; i < toppingsArr.length; i++) {
            switch (toppingsArr[i]) {
                case 'chocolate':
                    price = price + icecream.big.toppings.chocolate;
                    console.log(price);
                    break;
                case 'caramel':
                    price = price + icecream.big.toppings.caramel;
                    console.log(price);
                    break;
                case 'berry':
                    price = price + icecream.big.toppings.berry;
                    console.log(price);
                    break;
                default:
                    console.log(price);
                    validateToppingsList();
                    break;
            }
        }
    };
    var validateToppingsList = function () {
        toppingsList = prompt('You must choose one of toppings. Available: chocolate, caramel, berry.', 'chocolate');
        countToppingPrice();
        console.log(price);
    };
    if (toppingsList == undefined) {
        validateToppingsList();
        console.log(price);
    }
    else {
        countToppingPrice();
        console.log(price);
    }
    console.log(price);
    return price;
};
buyIcecream();
