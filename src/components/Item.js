
let is_ok = true; 

let tipografias = ["Alegreya","Bodoni", "Open Sans", "Piazolla", "San Francisco"];

let lista = (time, task) => {
    return new Promise ((resolve, reject) => {
        if (is_ok) {
            setTimeout (()=> {
                resolve(task) 
            }, time);
        } else { 
            reject ("Error")
        }
    })
}

lista (2000, tipografias)
    .then (lista => console.log (tipografias))
    .catch (err => console.log (err))

export default Item;