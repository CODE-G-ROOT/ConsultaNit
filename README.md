# ConsultaNits

Proyecto destinado a facilitar las consultas de los NITs (Número de Identificación Tributaria) de la DIAN (Dirección de Impuestos y Aduanas Nacionales de Colombia). Este proyecto busca hacer la vida de los contadores más fácil al ofrecer una plataforma donde se pueden consultar los NITs de manera rápida y sencilla.

## Descripción

Este proyecto no consume ninguna API oficial de la DIAN. Dado a que la DIAN no proporciona una fuente pública para el fácil acceso de datos, se recurre a la acción de contribuir al crecimiento de datos por medio de la inserción de información proporcionada por la comunidad.

Gracias a esta colaboración, la base de datos de NITs crece con el tiempo, lo que permite tener un recurso útil y accesible para quienes necesiten verificar información tributaria.

El objetivo principal es crear una plataforma colaborativa que permita a los contadores y ciudadanos verificar fácilmente los NITs asociados con las entidades y personas en Colombia.

## Características

- **Registro de contadores:** Los contadores pueden registrarse en la plataforma para acceder a funcionalidades personalizadas.
- **Gestión de clientes:** Los contadores registrados pueden almacenar los NITs de sus clientes por separado, permitiendo un fácil acceso y seguimiento.
- **Colaboración comunitaria:** La información sobre los NITs se añade de forma manual por los colaboradores del proyecto. Cualquier persona puede contribuir insertando datos correctos y actualizados para mejorar la base de datos.
- **Ingreso de datos:** La API puede leer y almacenar información de archivos tipo `.xlsm`, `.xlsx`, `.xlsb`, `.xltx`, `.pdf` y `.txt`.
- **Acceso libre:** Cualquier persona puede utilizar la plataforma para realizar consultas sin necesidad de registrarse, aunque los contadores registrados tienen beneficios adicionales como la gestión de clientes.

## Objetivos a futuro

- Expandir el proyecto más allá de Colombia, permitiendo la consulta de NITs de otros países.
- Fomentar la colaboración entre los usuarios para mantener una base de datos actualizada y precisa.
- Mejorar la plataforma con funcionalidades adicionales que permitan realizar consultas más específicas y detalladas.

## ¿Cómo funciona?

1. **Colaboración comunitaria:** La información sobre los NITs se añade de forma manual por los colaboradores del proyecto. Cualquier persona puede contribuir insertando datos correctos y actualizados para mejorar la base de datos.
2. **Acceso libre:** Cualquier persona puede utilizar la plataforma para realizar consultas sin necesidad de registrarse o pagar.

## Contribuir

Si deseas colaborar, puedes:

1. **Insertar información:** Asegúrate de que los NITs que agregues sean correctos y actualizados.
2. **Reportar errores:** Si encuentras algún error en la plataforma o en los datos, por favor, abre un "issue" en el repositorio para que podamos solucionarlo.
3. **Mejorar la documentación:** Si encuentras que la documentación puede ser más clara o que falta algo, siéntete libre de mejorarla.

## Requisitos

- **Node.js** (versión recomendada: 22.13.3 o superior)
- **PostgresSQL**
- **Pnpm** (versión recomendada: 10.0.0 o superior)
- **Docker Compose** (versión recomendada: 10.0.0 o superior)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/ConsultaNits.git
    ```

2. Instala las dependencias:

    ```bash
    pnpm install
    ```

# Licencia

Consulta el archivo LICENSE para más detalles.
