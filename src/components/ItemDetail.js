import React from "react";
import Item from "./Item";
import { Container, Row } from "reactstrap";
import ItemCount from "./ItemCount";


export default function ItemDetail ({items}){
    return (
        <> 
        <Container>
            <Row> 
            {items.name ? (
                <div className="itemdetail_container"> 
                    <img src={items.image} alt="" className="itemdetail_image"/>
                        <div className="itemdetail_info"> 
                        <p class="title-name" className="itemdetail__title">{items.name} </p>
                        <p className="itemdetail_desc">{items.description} </p>
                        <p className="itemdetail_price" class="txt-violeta">Precio: {items.cost} </p>
                        {/* <p className="itemdetail_stock"> 
                        Stock disponible: {items.stock} unidades</p> */}
                        <ItemCount initial={1} stock={items.stock} />
                </div>
            </div>
        ) : (<h3> Cargando...</h3>
        )}
        </Row> 
        </Container>
        </>
    );
}


// export default function ItemDetail ({items}){
//     console.log (items)
//     return (
//         <>
//             <Container>
//                 <Row>
//                     <Item key={items}/>
//                 </Row>
//             </Container>
//         </>
//     )
// }