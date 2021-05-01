# TaskApp-company

TaskApp-company es una landing page de una aplicación movil ficticia.

Esta web esta basada en el diseño de GarySimons y la codeo de cero para que sea responsive.

![ScreenShot](https://raw.githubusercontent.com/nicoierino/taskapp-company/master/screenshot.png "ScreenShot")

## Demo

La demo está hosteada en netlify y usa Continuous Deployment por lo que se rebuildea y republica con cada cambio en la master branch

[https://confident-thompson-129836.netlify.app/](https://confident-thompson-129836.netlify.app/)

## Tecnologias usadas

Node, Webpack, postcss, babel, GiT y Netlify para deploy del demo

## Instalación

```node
node install
```

## Build

Crea la carpeta docs/ con el proyecto listo para ser publicado.
Todo el código queda minificado, el javascript pasa por babel, todo el css se unifica en solo archivo y las reglas de css no utilizadas (si las hubiera) se descartan.

```node
npm run build
```

## Webpack devServer para desarollo

Webpack hostea localmente el proyecto en el puerto 3000 y se actualiza on-the-fly con cada cambio del codigo

[http://localhost:3000](http://localhost:3000)

```node
npm run dev
```
