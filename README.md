# SHOES MDQ, Tienda de Zapatillas Online

_Este proyecto fue realizado para el curso de React Js, dictado por CoderHouse_

## FUNCIONALIDADES 💻

- Se obtienen los datos desde FireStore, servicio brindado por Firebase.
- Mediante el sistema de componentes, se dividen las responsabilidades entre si.
- La comunicacion con el usuario se da a traves de los SweetAlert
- Los productos se pueden visualizar a traves de un catalogo en general, o bien, verlos por categorias usando los diferenetes filtros segun cada categoria.
- El stock de productos se chequea antes de sumarlo al carrito, para evitar errores de falta de stock, a futuro trabajara con stock a tiempo real.
- A traves de la implementacion de las cantidades y precio unitario de cada producto se actualiza constantemente el carrito a fin de hacer la app mas dinamica y rapida y tambien para agilizar la suma total de cantidades de articulos y precio total. 
- Al finalizar la compra, se genera un ticket de compra, el cual en un futuro, el cliente podra buscarlo y visualizar en que proceso esta su pedido.
- Dentro del carrito de compras se implementan los botones "sumar item", "restar item", "borrar producto" y "vaciar carrito" para que el usuario pueda hacer cualquier modificacion directamente desde el carrito sin tener que volver al detalle del producto, en caso de que el carrito este vacio tambien se implementa un boton para que el usuario sea redirigido directamente al catalogo general para empezar a comprar productos.
- Desde la seccion "Ingresar/Registarse" se implementa la autentificacion de cada usuario mediante el servicio de Firebase, como asi tambien la posibilidad de acceder mediante una cuenta de google, donde el usuario podra crear una cuenta o acceder directamente mediante un login y quedar asi ya logueado para poder realizar compras en la app.

## HERRAMIENTAS UTILIZADAS ⚙️🛠️
- `React JS`
- `Firebase`
- `React Dom`
- `Sweet Alert2`
- `Css`
- `Boostrap`

## DEMO

- Pagina Principal con todos los productos, filtro por categoria, veo las marcas que hay, hago un login de usuario, selecciono un producto, accedo al detalle del producto, elijo cantidad y voy al carrito, alli selecciono finalizar compra y relleno el formulario para que me genere un numero de orden y cargue la compra en la base de datos de "pedidos".

<img src="./public/assets/shoesMDQ.gif" />


## PERSONAS QUE HICIERON POSIBLE ESTO 🙏

Quiero agradecerle especialmente al profesor Horacio Gutierrez por su brillante curso de React JS y todas sus enseñanzas a lo largo de este curso como asi tambien al crack de mi tutor, Agustín Coelho, quien desde el dia 1 que empezo el curso estaba pendiente de si entendia, de pasar material y por supuesto responder todas las dudas que iban surgiendo a lo largo del curso.


## CREADOR 😛
- Martin Alejandro de Souza
- _Estudiante de Desarrollo FullStack, autodidacta como estilo de vida!_
- [Linkedin](https://www.linkedin.com/in/martindesouza86)
- [Github](https://github.com/mardesouza86)