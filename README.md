# Almundo

* Prueba de almundo para listar Hoteles usando filtros de busqueda por nombre o por estrellas

* Este proyecto a nivel de Front-end fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.
* A nivel de Back-End se utilizaron: Node.js, Mongoose, Express

## Requisitos

* Se debe tener instalado MongoDB para almacenar los datos de los hoteles y agregar una capa de persistencia de datos a la aplicación (Se utiliza el puerto por default de MongoDB 27017)

## Importar datos en MongoDB

Ejecutar `mongoimport --db almundoHotels --collection hotels --file api/data/data.json --jsonArray` para generar una base de datos almundoHotels con una coleccion de hotels

## Desplegar Back-End

* Ir a la carpeta de la API: `cd api`
* Ejecutar `npm install` para instalar las dependencias de node.js
* Ejecutar `npm run start` para arrancar el Back-end (Puerto 3000 debe estar libre)

## Desplegar Front-End

* Desde la carpeta root del proyecto:
* Ejecutar `npm install` para instalar las dependencias del Front-End
* Ejecutar `ng serve open` para arrancar el Front-End(Puerto 4200 debe estar libre)

## Para minificar y ofuscar los archivos del proyecto

* Ejecutar `ng build -prod` agrega los archivos minificados a la carpeta `/dist`

