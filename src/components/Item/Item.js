import './Item.css'

const Item = ({id, category, name, img, price, stock}) => {
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
            Precio: ${price}
        </p>
      <p className='Info'>
          Stock disponible: {stock}
      </p>
      <p className='category'>
          {category}</p>
      </section>
      <footer className= 'Footer'>
        <button className='Button'>Ver detalle</button>
      </footer>
   </article>
    

  )
}

export default Item