// import itemListContainer from "../components/ItemListContainer";
// import Item from "../components/Item";
// import ItemDetailContainer from "../components/ItemDetailContainer";

const products = [
    {
        id: 1,
        name: "Alegreya",
        cost: 30,
        description: "Lorem ipsum",
        image: ["https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.huertatipografica.com%2Fuploads%2Falegreya-ht-pro-2weTw8.png&imgrefurl=https%3A%2F%2Fwww.huertatipografica.com%2Fen%2Ffonts%2Falegreya-ht-pro&tbnid=L9NMQAe7ziWrDM&vet=12ahUKEwj57ri0tIr3AhW8MrkGHVkmBeEQMygAegUIARCsAQ..i&docid=eFe3VaD17FqCrM&w=1000&h=500&q=alegreya&ved=2ahUKEwj57ri0tIr3AhW8MrkGHVkmBeEQMygAegUIARCsAQ"]
    },
    {
        id: 2,
        name: "Bodoni",
        cost: 40,
        description: "Lorem ipsum",
        image: ["https://imborrable.com/wp-content/uploads/2020/10/top-10-tipografias-bodoni.png"]
    },{
        id: 3,
        name: "Open Sans",
        cost: "U$U 25,00",
        description: "Open Sans is a humanist sans serif typeface designed by Steve Matteson, Type Director of Ascender Corp. This version contains the complete 897 character set, which includes the standard ISO Latin 1, Latin CE, Greek and Cyrillic character sets.",
        image: ["https://academiadediseno.com/wp-content/uploads/2020/05/google-fonts-open-sans.jpg"]
    },
    {
        id: 4,
        name: "Piazolla",
        cost: 20,
        description: "Lorem ipsum",
        image: ["https://www.huertatipografica.com/uploads/piazzolla-ZE3IyG.png"]
    },
    {
        id: 5,
        name: "San Francisco",
        cost: 150,
        description: "Lorem ipsum",
        image: ["https://fontsfree.net/assets/preview/45311-big-thumbs3-download-v1.png"]
    },
]

// export const getProducts = () => {
//     return new Promise ((resolve, reject)=> {
//         setTimeout ( () => {
//             return resolve (products);
//         }, 2000)
//     })
// }

export const getDetail = () => {
    return new Promise ((resolve, reject)=> {
        setTimeout ( () => {
            return resolve (products[2]);
        }, 2000)
    })
}


