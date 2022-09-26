Challenge

Se requiere implementar una API que provea en formato JSON el estado del tiempo basado en diferentes endpoints.

Instrucciones
- Instalar dependencias mediante el comando: npm i. El ejecutar dicho comando, se instalaran las dependencias descriptas en el archivo package.json necesarias para el correcto funcionamiento de la API.

- Iniciar test mediante el comando: npm test. El comando correrá los 8 test desarrollados en los archivos que contiene la carpeta test.

- Iniciar Servidor Web mediante el comando: npm start.

Rutes
    -Ruta base /v1

Endpoints
    -v1/location
        Devuelve los datos de ubicación city según ip-api.

    -v1/current[/city]
        [City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo actual.]

    -v1/forecast[/city]
         [City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días ]

Módulos utilizados para el desarrollo:
    -Express
    -node-fetch
    -nodemon
    -cors
    -dotenv

Apis de terceros utilizadas para el desarrollo:
    -api.openweathermap.org
    -ip-api.com
    -api.ipify.org
