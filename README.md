# 🛒 Carrito de Compras - Taller 2

## 📌 Descripción

Aplicación web desarrollada con React que permite gestionar un catálogo de productos mediante una interfaz moderna, organizada y responsive. 

El proyecto implementa navegación dinámica utilizando React Router, diseño visual con Bootstrap y una arquitectura modular basada en componentes reutilizables.

Este trabajo fue realizado como parte del Taller 2 de React y Git, aplicando buenas prácticas de desarrollo y control de versiones con GitHub.

---

## 🚀 Características Principales

- Navegación entre páginas con React Router DOM
- Uso de NavLink para identificar rutas activas
- Arquitectura basada en componentes
- Diseño responsive con Bootstrap 5
- Barra de navegación con buscador
- Sección de inicio con catálogo de productos
- Sección Props
- Sección Artículos
- Formulario visual para agregar productos
- Botones visuales para editar y eliminar productos
- Separación organizada por carpetas (features/layout/components)

---

## 🖥️ Interfaz Gráfica

La aplicación cuenta con:

- Header con navegación dinámica
- Logo principal que redirige al inicio
- Menú con enlaces:
- Inicio
- Props
- Artículos
- Buscador visual en la barra superior
- Sección principal con productos en formato Card
- Panel lateral para agregar productos
- Botones de acción (Editar / Eliminar)
- Footer informativo

El diseño utiliza una combinación de colores negro y blanco para mantener una estética minimalista y profesional.

---

## 🏗️ Arquitectura del Proyecto

El proyecto está estructurado bajo una arquitectura modular basada en componentes:

src/
│
├── features/
│   └── layout/
│       └── components/
│           ├── Header.jsx
│           ├── Footer.jsx
│           ├── Content.jsx
│           ├── Props.jsx
│           └── Article.jsx
│
├── App.jsx
├── main.jsx
└── shared/
    └── styles/

### 🔹 Explicación de la estructura

- **Header.jsx** → Barra de navegación
- **Footer.jsx** → Pie de página
- **Content.jsx** → Página principal (Inicio)
- **Props.jsx** → Página secundaria
- **Article.jsx** → Página adicional
- **App.jsx** → Configuración de rutas
- **main.jsx** → Punto de entrada de la aplicación

---

## ⚙️ Tecnologías Utilizadas

- React
- Vite
- React Router DOM
- Bootstrap 5
- Bootstrap Icons
- JavaScript (ES6+)
- Git
- GitHub

---

## 📎 Instalación y Ejecución

1️⃣ Clonar el repositorio: git clone https://github.com/DanteX786/react_y_git_taller-2.git
2️⃣ Ingresar a la carpeta del proyecto: cd react_y_git_taller-2
3️⃣ Instalar dependencias: npm install
4️⃣ Ejecutar el proyecto: npm run dev

---

## 🔗 Repositorio

https://github.com/DanteX786/react_y_git_taller-2

---

## 👤 Datos del Autor

**Nombre:** Juan camilo valle calle
**Proyecto:** Taller 2 - React y Git  
**Año:** 2026  
**Institución:** SENA

---

## 📌 Observaciones

Este proyecto tiene fines académicos y busca demostrar el manejo de:

- Componentes en React
- Enrutamiento dinámico
- Estructuración modular
- Control de versiones con Git
- Publicación en GitHub

---