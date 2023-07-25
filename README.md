# Plantz - Aplicación Web de Gestión de Especies del Mundo Plantae segun su Taxonomía.


El presente respositorio fue creado para llevar un control de versiones con respecto al proyecto ***Plantz.*** Como bien se menciona en el título esta aplicación web fue desarrollada con la finalidad de solucionar un problema existente respecto a la Gestión de Especies.


![image](https://github.com/2k12/Plantz/assets/104972625/5f41013c-4867-4340-acbd-67bcce7557ba)



El presente proyecto fue desarrollado haciendo uso del Stack PERN (Postgres,Express,React,Node). Donde estan definidos distintos tipos de usuarios que tendrán acceso a varias areas de la aplicación los cuales son: 

</br>


> - Usuario
> - Digitador
> - Taxónomo
> - Administrador

</br>

### 👤 Usuario

Con el rol de usuario tendra acceso unicamente al Módulo <ins>***Galería de Especies***</ins> que se encuentra en desarrollo donde se mostraran las distintas especies registradas en la plataforma.


![image](https://github.com/2k12/Plantz/assets/104972625/e5c11fc3-d923-4df4-ae4f-df6df95144f3)


### 👤 Digitador

Con el rol de digitador tendra acceso al Módulo <ins>***Registro Taxonómico***</ins> con la variación de que las especies que se registren tendran el estado de por verificar ya que un administrador (taxónomo especializado) tendra que verificar la especie en caso de que puedan existir errores en la digitación de la especie.

![image](https://github.com/2k12/Plantz/assets/104972625/22bef680-3764-4258-9112-f377d0577a29)

![image](https://github.com/2k12/Plantz/assets/104972625/a377d155-4665-4db6-9b3e-f79dcedbb85e)


### 👤 Taxónomo

Con el rol de digitador tendra acceso al Módulo <ins>***Registro Taxonómico***</ins> con la veriación de que las especies que se registren tendran el estado de verificado ya que el taxónomo tiene los conocimientos necesarios para regsitrar adecuadamente una especie.

![image](https://github.com/2k12/Plantz/assets/104972625/87418ab7-9fdd-4960-ac6b-52cc5d7c7c09)

![image](https://github.com/2k12/Plantz/assets/104972625/76f27f19-8a91-4474-9b76-47cdac565214)


### 👤 Administrador

Con el rol de digitador tendra acceso al apartado <ins>***Módulos de Administrador***</ins> en este apartado se presentaran los distintos módulos que estan a disposicion del administrador donde podra hacer cambios si así lo desea.

![image](https://github.com/2k12/Plantz/assets/104972625/f8b8ae1a-9c2c-4d31-9603-0b332223a996)

Los módulos a los cuales tiene acceso son:

![image](https://github.com/2k12/Plantz/assets/104972625/47592d7b-926b-4a7b-8fc6-f425961752f2)


## Uso 
- Mediante el uso de esta aplicacion el usuario registrado y con los roles tanto de ***Digitador, Taxónomo, Administrador***  podra regsitrar una especie ingresando los datos que se solicitan para registrar una nueva especie.

Paso 1 Registro Especie | Paso 2 Registro Especie |
 --- | --- |
 ![image](https://github.com/2k12/Plantz/assets/104972625/da56e05e-0407-4cf4-bab8-e9b3f4657010) | ![image](https://github.com/2k12/Plantz/assets/104972625/e48c3919-4f39-443b-aa35-ba1b7a2325c1)

- Luego de que la especie se ingrese correctamente se mostrara en la tabla de especies el nuevo registro hay que tener en cuenta que dependiendo del rol del usuario el estado cambia como antes se mencionó.

![image](https://github.com/2k12/Plantz/assets/104972625/bfeabdb5-9a3f-4bd6-b25a-85fefc89e27a)

- Se debe tener en cuenta que con el rol del administradr puedo realizar la gestion de las taxonomías y usuarios como se muestra a continuación.

TAXONOMÍAS

Registro Taxonomía |
 --- |
![image](https://github.com/2k12/Plantz/assets/104972625/1cba2ca9-acf5-46b4-9771-37296d70cff8) |

![image](https://github.com/2k12/Plantz/assets/104972625/c7a0b051-e17b-407a-ac2c-1812367c6c8c)

USUARIOS

Registro Usuarios |
---|
![image](https://github.com/2k12/Plantz/assets/104972625/f347ee46-d364-453e-8252-be0e6efb4c81) |

![image](https://github.com/2k12/Plantz/assets/104972625/6a757ee9-fe8b-4909-b2d4-f2a4736e3365)

![image](https://github.com/2k12/Plantz/assets/104972625/e1e985cf-9757-4fc4-b4d6-aa8dbc27ce47)


## Herramientas y Lenguajes Utilizados Desarrollo

> Frontend </br>
><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a>

> Backend </br>
> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>

> Servicios </br>
> <a href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a>

> Base de Datos </br>
> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> 

> Pruebas </br>
> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a>




## Autor

- Plantz - [Joan Pastillo](https://github.com/2k12)

