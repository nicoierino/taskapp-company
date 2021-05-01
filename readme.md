# TaskApp-company

TaskApp-company es una landing page de una aplicación movil ficticia.
Esta web esta basada en el diseño de GarySimons y la codeo de cero para que sea responsive.

![ScreenShot](https://raw.githubusercontent.com/nicoierino/taskapp-company/master/screenshot.png "ScreenShot")

## Demo

[https://confident-thompson-129836.netlify.app/](https://confident-thompson-129836.netlify.app/)

## Tecnologias usadas

Node, Webpack, postcss, autoprefixer, GiT y Netlify para deploy del demo

## Instalación

```node
node install
```

## Webpack Live Server para desarollo

Webpack hostea localmente el proyecto en el puerto 3000 y se actualiza con cada cambio del HTML, CSS y Javascript

[http://localhost:3000](http://localhost:3000)

```node
npm run dev
```

## Deploy

Crea la carpeta docs/ con el proyecto listo para ser publicado.
Todo el código queda minificado, el javascript pasa por autoprefixer, todo el css se unifica en solo archivo y las reglas de css no utilizadas (si las hubiera) se descartan.

```node
npm run build
```
