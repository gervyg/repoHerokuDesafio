# DESAFIO LEVANTADO HEROKU


### PASOS PARA LEVANTAR EL PROYECTO EN HEROKU

 Tener Heroku instalado

Cambiamos también la línea 5 del archivo index.js a

const port = process.env.PORT || 5000


Debemos instalar Heroku CLI para por línea de comandos, desplegar nuestra
aplicación. En el siguiente link encontrarás Heroku CLI para todos los SO
https://devcenter.heroku.com/articles/heroku-cli


Ejecutamos en la terminal heroku login para iniciar sesión con Heroku.


Agregamos el nuevo origen a nuestra aplicación escribiendo en la terminal dentro del
directorio raíz de nuestro proyecto.


heroku git:remote -a ger-nodejs


Luego subimos nuestra aplicación ingresando en la terminal

git checkout -b master

git push heroku master

 

Debes por último ingresar a la url que aparece en la imagen (esta url será distinta
para cada deploy y para cada proyecto, esto solo es una imagen de referencia).
# repoheroku