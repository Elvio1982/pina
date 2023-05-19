 const products= [
    {
      id: '1',
      name: 'Zapatillas Nike, Air ZoomAir',
      category: 'Mujer',
      price: 51000,
      img:'https://www.opensports.com.ar/media/catalog/product/cache/6f91ed87555a15260d810a895c116072/C/U/CU1855-006_0.jpg',
      stock: 20
    },
    { id: '2', name: 'Zapatillas adidas Response Super', category: 'Mujer', price: 44000, img: 'https://static.runnea.com/images/202209/adidas-zapatillas-running-response-super-3.0-runnea-200x200x80xX.jpg?1', stock: '50'},
    { id: '3', name: 'Pantalón Adidas', category: 'Hombre', price: 29000, img:'https://media.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/p/a/pantalon-adidas-future-icons-negro-100020hc5857001-1.jpg', stock: 30},
    { id: '4', name: 'Conjunto Reebok', category: 'Mujer', price: 55000, img:'https://assets.reebok.com/images/w_280,h_280,f_auto,q_auto:sensitive/463f04e181b44c08ae7faad50141e5b6_9366/buzo-deportivo-training-essentials.jpg', stock: 40},
    { id: '5', name: 'Remera Adidas', category: 'Hombre', price: 9000, img:'https://media.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/r/e/remera-adidas-essentials-logo-roja-100020gk9124001-1.jpg', stock: 30},
    { id: '6', name: 'Zapatillas adidas Pureboost', category: 'Niños', price: 45000, img:'https://media.solodeportes.com.ar/media/catalog/product/cache/a0bd03cb38235cf9ca6c3c8cbea4afc1/z/a/zapatilla-de-tenis-adidas-courtsmash-blanca-100010f36718001-1.jpg', stock: 15},
    { id: '7', name: 'Pantalon Puma Futbol', modelo: 'Niños', price: 15000, img:'https://i.ebayimg.com/thumbs/images/g/x40AAOSwVFNj-7Zl/s-l300.jpg', stock: 20},
    { id: '8', name: 'Pantalon Reeobok Mujer', category: 'Mujer', price: 7000, img:'https://www.opensports.com.ar/media/catalog/product/cache/25e89759b69d23d0ee436c9ddbb4ede0/1/3/1372632-019_0_6.jpg', stock: 10},
    { id: '9', name: 'Pantalon Adidas Clasico', category: 'Niños', price: 6000,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Wcr-RUV8Syh0OjkXz-nRMfus8syktnczO-fTFCbaDjiWAN-WsgteQzcTZcIgbIu4A_k&usqp=CAU.jpg', stock: 15},
    
  ]

  export const getProducts = () => {
    return new Promise((resolve)=> {
      setTimeout(() => {
        resolve(products)
        }, 500)}
        )}
  export const getProductById = (productId) => {
          return new Promise((resolve) => {
              setTimeout(() => {
              resolve(products.find(prod => prod.id === productId))
          }, 500)
      })
      }