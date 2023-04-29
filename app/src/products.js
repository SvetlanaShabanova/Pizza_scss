const products = {
    "01": {
        "img": "../app/img/Menu_1.png",
        "name": "Hand Sandwich",
        "prise": 16.50,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing.",
    },
    "02": {
        "img": "../app/img/Menu_2.png",
        "name": "Hand Sandwich",
        "prise": 15.50,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing.",
    },
    "03": {
        "img": "../app/img/Menu_3.png",
        "name": "Hand Sandwich",
        "prise": 10.25,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing.",
    },
    "04": {
        "img": "../app/img/Menu_4.png",
        "name": "Hand Sandwich",
        "prise": 12.25,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing.",
    },
    "05": {
        "img": "../app/img/Menu_5.png",
        "name": "Hand Sandwich",
        "prise": 20.45,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing.",
    },
    "06": {
        "img": "../app/img/Menu_6.png",
        "name": "Hand Sandwich",
        "prise": 30.35,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing.",
    },
};

//Вывод карточек с товарами
let div = document.querySelector(".catalog-main");
for (let key in products){
    let item = document.createElement("div");
    item.classList.add("catalog-item");
    let image = document.createElement("div");
    image.classList.add("catalog-item-img");
    image.style.backgroundImage = `url('${products[key].img}')`;
    item.append(image);
    let h4 = document.createElement("h4");
    h4.innerHTML += products[key].name;
    item.append(h4);
    let h3 = document.createElement("h3");
    h3.innerHTML += products[key].prise + "$";
    item.append(h3);
    let p = document.createElement("p");
    p.innerHTML += products[key].description;
    item.append(p);
    let btn = document.createElement("a");
    btn.classList.add("btn");
    btn.classList.add("btn-html");
    btn.setAttribute("data-articul", key);
    btn.innerHTML = "Bay";
    item.append(btn);
    div.append(item);
}
//Корзина
const basket ={};
let basketOut = document.querySelector(".basket-out");
//Добавляем слушатель на контейнер с товарами
let out = document.querySelector(".catalog-main");
out.addEventListener("click", event => {
    if (event.target.classList.contains("btn-html")){
        let articul = event.target.dataset["articul"];
        if (basket[articul] !== undefined){
            basket[articul]["count"]++;
        }
        else {
            basket[articul] = products[articul];
            basket[articul]["count"] = 1;
        }
        localStorage.setItem("cart", JSON.stringify(basket));
        basketOut.innerHTML = basket[articul]["count"];
        console.log(basket[articul]["count"]);
    }
});

let btnBasket = document.querySelector(".basket");
btnBasket.addEventListener("click", event =>{
    window.location.href = "../app/cart.html";
});


