class Cart {
    constructor(
        items,
        cartClass = "cart",
        plusClass = "plus",
        minusClass = "minus",
        deleteClass = "delete",
        currency = "",
    ) {
        this.items = items;
        this.cartClass = cartClass;
        this.plusClass = plusClass;
        this.minusClass = minusClass;
        this.deleteClass = deleteClass;
        this.currency = "$";
    }

    productsPlus(art) {
        this.items[art]["count"]++;
    }

    productsMinus(art) {
        if (this.items[art]["count"] - 1 == 0) {
            this.productsDelete(art);
        }
        else {
            this.items[art]["count"]--;
        }
    }

    productsDelete(art){
        delete this.items[art];
    }

    getTotal(){
        let total = 0;
        for (let key in this.items){
            total+= this.items[key]["count"] * this.items[key]["prise"];
        }
        return total;
    }

    render(){
        let divContainer = document.createElement("div");
        divContainer.classList.add(this.cartClass);

        for (let key in this.items){
            let product = this.items[key];
            //Создаем 1 элемент
            let div = document.createElement("div");
            div.classList.add("item");
            //Кнопка
            let btn = document.createElement("a");
            btn.classList.add(this.deleteClass)
            btn.classList.add("btn-primary");
            btn.innerHTML = "X";
            btn.setAttribute("data-articul", key);
            div.append(btn);
            //Картинка
            let img = document.createElement("img");
            img.src = product.img;
            div.append(img);
            //Наименование
            let p = document.createElement("p");
            p.innerHTML = product.name;
            div.append(p);
            //Минус
            btn = document.createElement("a");
            btn.classList.add(this.minusClass);
            btn.classList.add("btn-primary");
            btn.innerHTML = "-";
            btn.setAttribute("data-articul", key);
            div.append(btn);
            //Количество
            let span = document.createElement("span");
            span.innerHTML = product.count;
            div.append(span);
            //Плюс
            btn = document.createElement("a");
            btn.classList.add(this.plusClass);
            btn.classList.add("btn-primary");
            btn.innerHTML = "+";
            btn.setAttribute("data-articul", key);
            div.append(btn);
            //Тотал
            span = document.createElement("span");
            span.innerHTML = product.count * product.prise + " " + this.currency;
            div.append(span);
            divContainer.append(div);
        }
        //Full total
        let div = document.createElement("div");
        div.classList.add("item");
        let span = document.createElement("span");
        span.innerHTML = this.getTotal()+ " " + this.currency;
        div.append(span);
        divContainer.append(div);
        return divContainer;
    }

}