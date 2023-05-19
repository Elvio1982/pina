import './ItemList.css'
import Item from '../Item/Item'

//Componente que se encargar de listar los productos
const ItemList = ({products}) => {
  return (
    <div className='List'>
        {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList