// IMPORTACIÓN Y EXPORTACIÓN

import {calcularIva2, Producto} from "./05-desestructuracion-Funciones";

const tiendaProductos:Producto[]=[
    {
        desc:'Telefono1',
        precio:1234
    },
    {
        desc:'Tablet2',
        precio:2345
    },
    {
        desc:'Telefono2',
        precio:2222
    }
];

const [total1,iva1]=calcularIva2(tiendaProductos);
console.log(`Total: ${total1} \n IVA:${iva1}`)
    