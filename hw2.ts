interface Iicecream {
    name: string;
    price:number;
};
const icecream = {
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
let price: number = 0;
let buyIcecream = () : void => {
// price: 0;
let type: string = prompt ('Ice cream type (small: 10грн, big: 25грн?', 'small');
switch(type) {
case 'small':
    price = price + icecream.small.price;
    console.log(price);
    break;
case 'big':
    price = price + icecream.big.price + choseDetails();
    console.log(price);
    break;
}
let marmalow: string = prompt ('Do you need marmalow: +5грн ?');
if (marmalow == 'yes') {
    price = price + icecream.marmalow.price;
    console.log(price);
}
console.log(price);
    alert("Ice cream price = " + price);
};

let choseDetails = () : number => {
let toppingsPrice: number = 0;
let toppingsList : string = prompt('Choose toppings. Available: chocolate: +5грн, caramel: +6грн, berry: +10грн.', 'chocolate');

let countToppingPrice = () => {
    let toppingsArr = toppingsList.split(', ');
    for(let i = 0; i < toppingsArr.length; i++) {
            switch(toppingsArr[i]) {
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

let validateToppingsList = () => {
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
