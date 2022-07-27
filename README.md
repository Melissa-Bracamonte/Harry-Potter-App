# Harry Potter App

## Índice

- [1. Harry Potter App - Planeación](#1-Harry-Potter-App---Planeación)
- [2. API](#2-API)
- [3. Historias de usuario](#3-Historias-de-usuario)
- [4. Diseño de la Interfaz de Usuarix](#4-Diseño-de-la-interfaz-de-Usuario)
- [5. Vista final](#5-Vista-final)
- [6. Stack tecnológíco](#6-Stack-tecnológíco)
- [7. Instrucciones para levantar el proyecto](#7-Instrucciones-para-levantar-el-proyecto)
- [8. Lo que más disfruté](#8-Lo-que-más-disfruté)
- [9. Áreas de oportunidad](#9-Áreas-de-oportunidad)
- [10. Pain points que enfrenté](#10-Pain-points-queenfrenté)
- [11. Conoce la app](#11-Conoce-la-app)

---

## 1. Harry Potter App - Planeación

Harry Potter App es una aplicación que permite ver a los personajes de las películas de Harry Potter, su información y la casa a la que pertenecen diferenciada por colores, además permite registrar personajes dentro de la app.

El desarrollo de este proyecto se hizo siguiendo la métodología SCRUM, por lo que trabajé por historias de usuario aterrizando la planeación con sus criterios de aceptación y definición de terminado en Trello, las actualizaciones de cada versión se hicieron en Github en la rama Progress, para posteriormente hacer un pull request a la rama master donde podrán encontrar la versión final de este proyecto

![trello](https://raw.githubusercontent.com/Melissa-Bracamonte/Harry-Potter-App/37bc56de8568ae241d630d017be6333318c1edc2/harry-potter/src/img/photosReadme/trello.png)

## 2. API

Para este proyecto se trabajó con una API en Json Server llamada, **characters**, en la cual se encuentra almacenada la data sobre los personajes de Harry Potter, así como su información personal. A continuación puedes ver la arquitectura de la APIs

![api](https://raw.githubusercontent.com/Melissa-Bracamonte/Harry-Potter-App/f80fa921f922e0d24f284282eddefb4c749d2312/harry-potter/src/img/photosReadme/api.png)

## 3. Historias de usuario

Para asegurarnos que la app fuese intuitiva para el usuario y se cumplieran con los requisitos, trabajé por historias de usuarios que fueron la base de la planeación de este proyecto:

#### [Historia de usuario 1] 
Yo como fanático de Harry Potter quiero tener una aplicación donde pueda visualizar la información de los personajes de las películas.
---

#### [Historia de usuario 2] 
Yo como fanático de Harry Potter quiero diferenciar a qué casa pertenece cada personaje

#### [Historia de usuario 3] 
Yo como fanático de Harry Potter quiero diferenciar qué personajes murieron y cuáles siguen con vida

#### [Historia de usuario 4]
Yo como fanático de Harry Potter quiero poder ver solo a los staff y solo a los estudiantes

#### [Historia de usuario 5]
Yo como fanático de Harry Potter quiero poder agregar nuevos personajes

#### [Historia de usuario 6]
Yo como fanático de Harry Potter quiero poder tener mi lista de  personajes favoritos

## 4. Diseño de la Interfaz de Usuarix

El diseño de la aplicación se hizo siguiendo el siguiente prototipo de Figma:

![figma1](https://raw.githubusercontent.com/Melissa-Bracamonte/Harry-Potter-App/f80fa921f922e0d24f284282eddefb4c749d2312/harry-potter/src/img/photosReadme/prototipo.png)
![figma2](https://raw.githubusercontent.com/Melissa-Bracamonte/Harry-Potter-App/f80fa921f922e0d24f284282eddefb4c749d2312/harry-potter/src/img/photosReadme/prototipo2.png)
![figma3](https://raw.githubusercontent.com/Melissa-Bracamonte/Harry-Potter-App/f80fa921f922e0d24f284282eddefb4c749d2312/harry-potter/src/img/photosReadme/prototipo3.png)

## 5. Vista final

Todo lo anterior dio como resultado la interfaz en desktop y en móbil:

![interfaz-1](https://raw.githubusercontent.com/Melissa-Bracamonte/Harry-Potter-App/f80fa921f922e0d24f284282eddefb4c749d2312/harry-potter/src/img/photosReadme/interfaz1.png)
![interfaz-2](https://raw.githubusercontent.com/Melissa-Bracamonte/Harry-Potter-App/f80fa921f922e0d24f284282eddefb4c749d2312/harry-potter/src/img/photosReadme/interfaz2.png)
![interfaz-3](https://raw.githubusercontent.com/Melissa-Bracamonte/Harry-Potter-App/f80fa921f922e0d24f284282eddefb4c749d2312/harry-potter/src/img/photosReadme/interfazMobile1.png)
![interfaz-4](https://raw.githubusercontent.com/Melissa-Bracamonte/Harry-Potter-App/f80fa921f922e0d24f284282eddefb4c749d2312/harry-potter/src/img/photosReadme/interfazMobile2.png)

## 6. Stack tecnológíco

Las tecnologías que se usaron para llevar a cabo este proyecto son:

- React js.
- Json server.
- Bootstrap
- Sass y flexbox
- Sweetalert
- Github
- Font Awesome
- Heroku
- Mock Api

## 7. Instrucciones para levantar el proyecto

Para levantar este proyecto en tu local sigue los siguientes pasos:

- Copia el link de este repositorio, lo encontrarás dando clic en el botón **Code**.
- A través de la terminal ingresa a la ruta de tu equipo en la que desees guardar el repositorio.
- Usa el comando **git clone**, deja un espacio y luego pega el link que previamente copiaste del repositorio
- Abre el proyecto en un editor de código, como Visual Studio Code.
- Asegurate de tener instaladas todas las técnologías que se usaron para desarrollar este proyecto, las encontrarás en el archivo **package.json**
- Debes correr la aplicación de React desde la terminal usando el comando **npm start**.
- Debes levantar el servidor de JSON server usando el comando **json-server --watch data/db.json --port 3004**.

## 8. Lo que más disfruté

- Utilizar nuevas técnologías como SASS que en tan poco tiempo me permitieron explorar lo mucho que puedo mejorar la calidad de mis proyectos en el futuro
- Crear esta aplicación en React y basado en requerimientos y una guia de diseño ya que me permitió reforzar mis conocimientos y además facilitó el desarrollo de la planeación.
- Aprender nuevas cosas y enfrentarme a nuevos retos.

## 9. Áreas de oportunidad

De haber tenido más tiempo sin lugar a dudas estos son los puntos que hubiese mejorado:

- Guardar personajes favoritos usando Redux.
- Guardar la imagen que se carga en el input Type File para agregar la imagen del nuevo personaje registrado.
- Agregar al formulario de registro de un nuevo personaje más datos para enriquecer la información que se visualiza en la interfaz.
- Hacer un CRUD que permita además de agregar nuevos personajes, editar y borrarlos.
- Aprovechar más los beneficios de SASS
- Hacer test unitarios usando Jest o React Testing Library

Sin duda nunca paramos de aprender, por lo que tomaré estas áreas de oportunidad para seguir investigando, mejorando y creciendo profesionalmente.

## 10. Pain points que enfrenté

Los bugs más significativos que atravesé fue intentar implementar Redux, cuando llegué esta historia de usuario ya tenia muy poco tiempo y este fue mi primer acercamiento a Redux, lo cuál dificultó que pudiera cumplir con esta historia de usuario, sin embargo este es un objetivo que me quedo después de esta prueba, estoy segura que con algunas horas extras de trabajo, además de investigación, ánalisis y lectura lo voy a poder lograr.
Por otra parte, al iniciar con la funcionalidad correspondiente a hacer el Post en la API, me arrojaba el error **status of 500 (Internal Server Error) en json server**, este error me atoró por un par de horas hasta que en mi investigación sobre cómo resolverlo, encontré que cada objeto del JSON debe tener un id, así que una vez que agregé un id a cada objeto pude hacer el Post sin ningún problema.
Además, al intentar hacer el diseño responsivo con SASS, intenté hacer un Mixins, pero esto me lanzaba un error recurrente por lo que tuve que implementar media query.

## 11. Conoce la app

Prueba la aplicación y conoce más sobre Harry Potter [aquí](https://h-p-a.herokuapp.com/).

El deploy de esta aplicación se hizo con Heroku y Mock Api. Al ingresar verás que los personajes tienen distintos colores de tarjeta, esto es porque cada color representa una casa en particular:

- El naranja te mostrará a los integrantes de la casa Gryffindor.
- El verde te permitirá ver a los integrantes de la casa Slytherin.
- El azul representa a la casa Ravenclaw.
- El amarillo pertenece a los integrantes de la casa Hufflepuff.
- E morado fue asignado a todos los personajes que no pertenecen a alguna casa o que acabas de incluir en la base de datos.
