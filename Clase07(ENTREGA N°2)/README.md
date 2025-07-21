# 🛍️ Mi Tienda Online

Este proyecto es una tienda online simple creada con **HTML, CSS y JavaScript puro**, que permite:

- Buscar productos por nombre
- Filtrar por rango de precio
- Agregar productos al carrito
- Confirmar compras simuladas
- Alternar entre modo claro y oscuro
- Guardar el carrito con `localStorage`

## 🚀 Cómo ejecutar el proyecto

1. **Descargá o cloná** el repositorio en tu computadora.
2. Abrí la carpeta del proyecto con **Visual Studio Code**.
3. Ejecutá el archivo `index.html` con tu navegador (doble clic o clic derecho → "Abrir con Live Server").

> 📝 No necesita instalación de dependencias ni servidores adicionales.

## 📁 Estructura del proyecto

```
📦mi-tienda-online
 ┣ 📂css
 ┃ ┗ 📄style.css
 ┣ 📂js
 ┃ ┗ 📄main.js
 ┣ 📄index.html
```

## 🛠 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- API externa: [dummyjson.com/products](https://dummyjson.com/products)
- SweetAlert2 para las alertas interactivas

## 👤 Autor

Juan Francisco Privitera

## 📝 Notas adicionales

- El carrito se guarda en el navegador mediante `localStorage`, por lo que se conserva al recargar.
- El proyecto usa carga incremental al hacer scroll, mientras no haya filtros activos.