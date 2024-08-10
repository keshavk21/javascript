const myNums = [1,2,3]

// const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price: 100
    },
    {
        itemName : "py course",
        price: 100
    },
    {
        itemName : "mobile course",
        price: 100
    },
    {
        itemName : "data science course",
        price: 100
    }
]

const priceToPay =shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay);
