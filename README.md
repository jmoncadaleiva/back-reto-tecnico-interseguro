
# RETO TÉCNICO INTERSEGURO - BACKEND

En este desafío técnico, se creó una API REST en Node.js para realizar la factorización QR de matrices, comprobar si una matriz es diagonal y gestionar la autenticación mediante JWT. El proyecto está diseñado bajo una arquitectura de microservicios e implementa la arquitectura hexagonal para garantizar una estructura modular, flexible y escalable.


## Stack Tecnológico

**Server:** Node, Express, Typescript, Docker


## Ejecución

Para ejecutar el proyecto, utiliza el siguiente comando:

```bash
  docker-compose up --build
```


## Variables de entorno

Para ejecutar este proyecto, necesitas agregar las siguientes variables de entorno a tu archivo .env:

`SECRET_KEY`
`API_PORT`
## API Reference
### Autenticación
#### Registrar usuario

```http
  POST /auth/register/
```

| Body Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. User email |
| `password` | `string` | **Required**. User password |

#### Autenticar usuario

```http
  POST /auth/login/
```

| Body Parameter | Type     | Description           |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. User email      |
| `password` | `string` | **Required**. User password |

#### Obtener mi usuario

```http
  GET /auth/me/
```

| Headers | Type     | Description           |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token      |

### Matrices

#### Verificar matriz
Verifica si la matriz ingresada es diagonal.
```http
  POST /matriz/verify/
```
| Headers | Type     | Description           |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token      |

| Body Parameter | Type     | Description           |
| :-------- | :------- | :------------------------- |
| `value` | `number[][]` | **Required**. Matriz a evaluar      |

#### Factorizar matriz
Calcula la factorización QR de la matriz ingresada.
```http
  POST /matriz/factorize/
```


| Headers | Type     | Description           |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token      |

| Body Parameter | Type     | Description           |
| :-------- | :------- | :------------------------- |
| `value` | `number[][]` | **Required**. Matriz a evaluar      |
