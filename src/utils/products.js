// import itemListContainer from "../components/ItemListContainer";
// import Item from "../components/Item";
// import ItemDetailContainer from "../components/ItemDetailContainer";

const products = [
    {
        id: 1,
        categoryId: 2,
        name: "Alegreya",
        cost: "US$ 30",
        description: "Lorem ipsum",
        stock: 5,
        image: ["https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2018/10/Alegreya.jpg?fit=698%2C349&ssl=1"]
    },
    {
        id: 2,
        categoryId: 2,
        name: "Bodoni",
        cost: "US$ 40",
        description: "Lorem ipsum",
        stock: 5,
        image: ["https://imborrable.com/wp-content/uploads/2020/10/top-10-tipografias-bodoni.png"]
    },{
        id: 3,
        categoryId: 1,
        name: "Open Sans",
        cost: "US$ 25,00",
        stock: 5,
        description: "Open Sans is a humanist sans serif typeface designed by Steve Matteson, Type Director of Ascender Corp. This version contains the complete 897 character set, which includes the standard ISO Latin 1, Latin CE, Greek and Cyrillic character sets.",
        image: ["https://academiadediseno.com/wp-content/uploads/2020/05/google-fonts-open-sans.jpg"]
    },
    {
        id: 4,
        categoryId: 2,
        name: "Piazolla",
        cost: "US$ 20",
        description: "Lorem ipsum",
        stock: 5,
        image: ["https://www.huertatipografica.com/uploads/piazzolla-ZE3IyG.png"]
    },
    {
        id: 5,
        name: "San Francisco",
        cost: "US$ 150",
        description: "Lorem ipsum",
        stock: 5,
        image: ["https://fontsfree.net/assets/preview/45311-big-thumbs3-download-v1.png"]
    },
]


module.exports = {
    products,
  }
