# Proyecto MercadoLibre por Patricio D'Andrea

## Stack utilizado
Se utilizó un stack basado en Angular 7 para el FrontEnd, y un servidor API REST creado 
usando Express 4.16. Se decidió utilizar Angular en vez de otras librerías como React,
por preferencias personales entre las que se encuentran el uso de Typescript para trabajar
con tipado estático, y por otro lado la capacidad de Angular como Framework, proveyendo 
inyección de dependencias para servicios, un cliente para generar boilerplate, integración
con RxJS, entre otros.

## Instalar y Correr
Se requiere tener instalado Node v8.9 o superior, con NPM v. 5.5.1 o superior. Una vez clonado
el proyecto y dentro del mismo, en una consola correr:
```
npm install
node server.js
```
En una nueva consola luego:
```
npm start
```

Finalmente se puede ver la aplicación a través de un navegador web entrando en:
http://localhost:4200

Y la API se encuentra corriendo en:
http://localhost:8000/api
