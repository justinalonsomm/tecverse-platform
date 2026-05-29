# TECVerse Platform

TECVerse Platform es una plataforma tecnológica desarrollada por estudiantes y docentes del Instituto Tecnológico de Costa Rica (TEC), Sede San Carlos, como parte de la asistencia universitaria **TEC Innovation Labs**.

El proyecto busca centralizar la información, proyectos, equipo, galería multimedia y canales de contacto de la asistencia, evolucionando posteriormente hacia una plataforma conectada a bases de datos, servicios API y herramientas de administración de contenido.

---

## Objetivos

* Mostrar los proyectos desarrollados por TEC Innovation Labs.
* Presentar al equipo de estudiantes y docentes participantes.
* Centralizar información institucional.
* Publicar galerías multimedia.
* Facilitar el contacto con la asistencia.
* Servir como base para futuros desarrollos con backend y base de datos.

---

## Tecnologías Utilizadas

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* Framer Motion

### Backend (en desarrollo)

* FastAPI
* Python

### Base de Datos (planificada)

* PostgreSQL

### Infraestructura (planificada)

* Vercel
* GitHub
* Supabase o Neon
* Docker

---

## Estructura del Proyecto

```text
tecverse-platform
│
├── apps
│   ├── api
│   │   ├── src
│   │   └── requirements.txt
│   │
│   └── web
│       ├── public
│       ├── src
│       ├── package.json
│       └── tsconfig.json
│
├── docs
│   ├── architecture.md
│   ├── database.md
│   └── roadmap.md
│
└── packages
```

---

## Módulos Implementados

### Inicio

Presentación principal de TEC Innovation Labs.

### Proyectos

Visualización de los proyectos activos:

* TECVerse
* CultureXR
* IoT Project

### Galería

Galería multimedia organizada por categorías.

### Equipo

Información del docente encargado y estudiantes participantes.

### Nosotros

Historia, misión, visión, metodología y tecnologías utilizadas.

### Contacto

Información institucional de contacto.

---

## Contacto Oficial

### Secretaría Ejecutiva

* Teléfono: 2401-3230
* Correo: [gesquivel@tec.ac.cr](mailto:gesquivel@tec.ac.cr)

### Docente Encargado

* Diego Armando Rojas Vega
* Correo: [drojas@itcr.ac.cr](mailto:drojas@itcr.ac.cr)

---

## Estado Actual

Actualmente el proyecto se encuentra en fase de prototipo funcional.

Las siguientes características se encuentran planificadas:

* Integración con base de datos PostgreSQL.
* Backend FastAPI.
* Sistema de autenticación.
* CMS para gestión de contenido.
* Administración de galería multimedia.
* Gestión dinámica de proyectos.
* Gestión dinámica de integrantes.
* Sistema de comentarios y noticias.

---

## Ejecución Local

### Frontend

```bash
cd apps/web

pnpm install

pnpm dev
```

Servidor local:

```text
http://localhost:3000
```

### Backend

```bash
cd apps/api

pip install -r requirements.txt

python src/main.py
```

---

## Documentación

La documentación técnica se encuentra en:

```text
docs/
├── architecture.md
├── database.md
└── roadmap.md
```

---

## Institución

Instituto Tecnológico de Costa Rica (TEC)

Sede Regional San Carlos

TEC Innovation Labs © 2026
