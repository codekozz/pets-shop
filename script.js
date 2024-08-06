const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];


const itemTemplate = document.querySelector('#item-template');
const shopItems = document.querySelector('#shop-items');
const searchButton = document.querySelector('#search-btn');
const searchText = document.querySelector('#search-input');


function makeItemTemplate(item) {
    const newItem = itemTemplate.content.cloneNode(true);

    newItem.querySelector('h1').textContent = item.title;
    newItem.querySelector('p').textContent = item.description;
    newItem.querySelector('img').src = item.img;
    newItem.querySelector('.price').textContent = `${item.price}P`;

    const tagsContainer = newItem.querySelector('.tags');

    item.tags.forEach(function(tag) {
        const tagItem = document.createElement('span');
        tagItem.textContent = tag;
        tagItem.classList.add('tag');
        tagsContainer.append(tagItem);
    });

    return newItem;
}

function itemsOnPage(item) {
    shopItems.append(makeItemTemplate(item));
}

function clickOnMe() {

    shopItems.innerHTML = '';
    let count = 0;

    items.forEach(function(item) {
        if (item.title.toLowerCase().includes(searchText.value.toLowerCase().trim())) {
            count += 1;
            itemsOnPage(item);
        }
    });

    if (count == 0) {
        shopItems.textContent = 'Ничего не найдено';
    }

}

items.forEach(itemsOnPage);

searchButton.addEventListener('click', clickOnMe);