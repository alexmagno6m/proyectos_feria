# Guía de Procedimiento: Creación de Cuenta Administrador con Pendrive de Windows (Truco de las Sticky Keys / sethc.exe)

Este procedimiento detalla los pasos para obtener acceso mediante una consola de comandos a nivel de sistema (SYSTEM) en un equipo con Windows 10 u 11 bloqueado, permitiendo crear un nuevo usuario administrador.

---

### Paso 1: Arrancar el equipo desde el pendrive USB de instalación
1. Inserta el pendrive de instalación de Windows 10 u 11 en el equipo bloqueado.
2. Enciende la computadora e ingresa inmediatamente al menú de arranque o **Boot Menu** presionando la tecla correspondiente según el fabricante (`F12`, `F11`, `F8` o `Esc`).
3. Selecciona el pendrive USB para iniciar el instalador de Windows.
* **Verificación:** El equipo debe iniciar cargando las pantallas iniciales del instalador de Windows en lugar del sistema operativo habitual.

### Paso 2: Abrir la consola de recuperación (Shift + F10)
1. En la primera pantalla del instalador de Windows (selección de idioma y teclado), presiona las teclas **Shift + F10** (o **Fn + Shift + F10** en algunos portátiles).
2. Se abrirá de inmediato una ventana de Símbolo del sistema (`cmd.exe`).
* **Verificación:** La ventana negra de la consola de comandos debe estar visible en la pantalla.

### Paso 3: Identificar la letra de la unidad del sistema operativo
1. En la consola, escribe `diskpart` y presiona Enter.
2. Escribe `list volume` y presiona Enter para ver las particiones disponibles.
3. Identifica la letra de la unidad que corresponde a tu partición principal de Windows basándote en su tamaño. (Supongamos para esta guía que la letra asignada es `D:`).
4. Escribe `exit` para salir de diskpart.
* **Verificación:** Confirmas la letra exacta de la partición donde está instalado Windows (en adelante utilizaremos `D:` como ejemplo, reemplázala por la tuya si difiere).

### Paso 4: Reemplazar el archivo de accesibilidad (`sethc.exe`)
Ejecuta los siguientes comandos uno por uno en la consola:
1. Escribe `D:` y presiona Enter (o la letra de tu unidad de Windows).
2. Escribe `cd Windows\System32` y presiona Enter.
3. Crea una copia de respaldo del archivo de teclas especiales escribiendo: 
   `copy sethc.exe sethc.bak`
4. Sobrescribe el archivo de teclas especiales con la consola de comandos escribiendo: 
   `copy cmd.exe sethc.exe`
   *(Si el sistema pregunta si deseas sobrescribir el archivo existente, confirma escribiendo `s` o `yes` y presionando Enter).*
* **Verificación:** El sistema debe mostrar el mensaje indicando que se ha copiado 1 archivo correctamente.

### Paso 5: Reiniciar el equipo e ingresar a la pantalla de bloqueo
1. Retira físicamente el pendrive USB del equipo.
2. Reinicia la computadora ejecutando el comando `wpeutil reboot` o apagándola y encendiéndola de forma normal.
3. Deja que el sistema cargue hasta llegar a la pantalla habitual de inicio de sesión de Windows.
* **Verificación:** Visualizas la pantalla de inicio de sesión donde se te pide la contraseña que desconoces.

### Paso 6: Invocar la consola desde la pantalla de bloqueo
1. Estando en la pantalla de inicio de sesión de Windows, presiona la tecla **Shift (Mayús) 5 veces seguidas** de manera rápida.
2. Debido al reemplazo de archivos realizado, en lugar de activarse las teclas especiales se abrirá una ventana de Símbolo del sistema con privilegios absolutos de `SYSTEM`.
* **Verificación:** Se despliega una ventana de comandos con privilegios elevados directamente sobre la pantalla de bloqueo.

### Paso 7: Crear el nuevo usuario administrador
Dentro de la consola abierta, ejecuta los siguientes comandos (reemplaza `NombreUsuario` y `Contraseña` por las credenciales que prefieras):
1. Para crear el nuevo usuario local:
   `net user NombreUsuario Contraseña /add`
2. Para otorgarle privilegios de administrador al usuario creado:
   `net localgroup administradores NombreUsuario /add`
* **Verificación:** Ambos comandos deben devolver el mensaje: *"Se completó el comando correctamente"*.

---

### Paso Obligatorio Final: Restauración de archivos del sistema
Una vez que hayas ingresado al sistema con tu nuevo usuario y gestionado el acceso o la recuperación de datos:
1. Vuelve a insertar el pendrive USB y arranca nuevamente el equipo desde él.
2. Abre la consola de recuperación presionando **Shift + F10**.
3. Accede a la ruta del sistema (`cd D:\Windows\System32` ajustando tu letra de unidad).
4. Restaura el archivo original ejecutando el comando de reversión:
   `copy sethc.bak sethc.exe`
   *(Confirma la sobrescritura si el sistema lo solicita).*
5. Retira el USB y reinicia de manera normal para dejar el sistema operativo seguro y en su estado original.

> **ADVERTENCIA: Riesgo de seguridad y uso ético**
> Este procedimiento altera archivos protegidos del kernel y del sistema de autenticación de Windows. Utilízalo únicamente en equipos de tu propiedad, dispositivos olvidados de los que tengas legítima autorización o tareas de soporte técnico autorizadas. El uso indebido en sistemas ajenos vulnera la privacidad y la seguridad informática. 