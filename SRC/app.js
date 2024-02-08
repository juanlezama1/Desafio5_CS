import express from 'express'
import __dirname from './path.js'
import productsRouter from './routes/productsRouter.js'

// Dejé la DB cargada con 10 productos de antemano utilizando la función .addProducts(product)

const my_app = express ()
const PORT = 8080

// Cada vez que se solcite algo con la ruta 'static', que busque los archivos estáticos en la carpeta 'public

my_app.use('/static', express.static(__dirname + '/public'))

// Cada vez que se envíen datos en formato JSON, que se parseen a datos objeto/arreglo de objetos de JS. 

my_app.use(express.json())

// Defino las acciones que tomará mi servidor ante las diferentes rutas

my_app.use('/products', productsRouter) // Cada vez que te consulten por products, andá al router en cuestión

// Levanto mi servidor y quedo escuchando solicitudes en el puerto en cuestión.

my_app.listen(PORT, () => {
    console.log(`Escuchando solicitudes en el puerto ${PORT}`)
})