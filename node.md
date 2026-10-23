---
title: "Cómo instalar y correr Node.js, Astro o Next.js en Windows sin privilegios de administrador"
date: 2026-10-22
tags: [node, windows, nextjs, astro, sin-admin]
---

# Ejecutar Node.js y frameworks modernos en Windows sin permisos de Administrador

## 1. ¿Es posible?
Sí, es completamente posible utilizando versiones portátiles (ZIP) que no requieren modificar el Registro de Windows ni la carpeta `C:\Program Files`.

---

## 2. Pasos para la instalación portable

1. **Descargar los binarios ZIP:**
   * Entra a la web oficial de Node.js y descarga el archivo comprimido **`.zip`** de la versión **LTS** para la arquitectura de tu equipo (ej. `x64`).

2. **Descomprimir en una carpeta de usuario:**
   * Extrae el contenido en una ruta donde tengas permisos de lectura y escritura, por ejemplo:
     ```text
     C:\Users\tu-usuario\tools\nodejs
     ```
   * *Nota:* No es necesario descomprimir Node.js dentro de la carpeta de tus proyectos; al estar en una ruta independiente, podrás reutilizarlo para cualquier desarrollo.

3. **Configurar las Variables de Entorno (`Path`):**
   * Presiona la tecla Windows, escribe **"Editar las variables de entorno de tu cuenta"** y abre la opción.
   * En la sección superior (*Variables de usuario*), selecciona **`Path`** y haz clic en **Editar**.
   * Añade la ruta exacta donde descomprimiste Node.js (ej. `C:\Users\tu-usuario\tools\nodejs`).
   * Guarda los cambios.

4. **Verificar la instalación:**
   * Abre una nueva terminal (CMD o PowerShell) y comprueba que los comandos responden correctamente:
     ```bash
     node -v
     npm -v
     ```

---

## 3. Uso con proyectos (Astro / Next.js)
Una vez configuradas las variables de entorno globales de tu usuario, solo necesitas:
1. Situarte en la carpeta de tu proyecto mediante la terminal.
2. Ejecutar las dependencias:
   ```bash
   npm install