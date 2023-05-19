import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({ id, name, category, img, price, stock}) => {
    return (
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
                 {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className='Img' />
        </picture>
        <section>
        <p className='Info'>
                Categoria: {category}
            </p>
            <p className='Info'>
                Precio: ${price}
            </p>
            <p className='Info'>
                Stock disponible: {stock}
            </p>
        </section>
        <footer className= 'Footer'>
            <ItemCount initial={1} stock={stock} onadd={(quantity) => console.log('Cantidad agregada',quantity)}  />
        </footer>
    </article>
    )
}

  export default ItemDetail;