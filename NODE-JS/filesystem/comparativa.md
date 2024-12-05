# Diferencias entre modelos de ejecución

## 1. Síncrono

- Las tareas se ejecutan en orden, una tras otra.
- La siguiente tarea no comienza hasta que termina la actual.

### Ejemplo:

```javascript
console.log('Inicio');
console.log('Fin');
// Salida: Inicio, Fin
```

---

## 2. Asíncrono con Callback

- Las tareas se delegan y un callback maneja el resultado cuando termina.
- Puede generar problemas de "callback hell".

### Ejemplo:

```javascript
console.log('Inicio');
setTimeout(() => {
  console.log('Tarea asíncrona');
}, 1000);
console.log('Fin');
// Salida: Inicio, Fin, Tarea asíncrona
```

---

## 3. Asíncrono con Async/Await

- Sintaxis más limpia que el callback.
- Las tareas asíncronas se escriben como si fueran síncronas.

### Ejemplo:

```javascript
async function tarea() {
  console.log('Inicio');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Tarea asíncrona');
  console.log('Fin');
}
tarea();
// Salida: Inicio, (pausa), Tarea asíncrona, Fin
```

---

## 4. Parallel

- Varias tareas se ejecutan al mismo tiempo (si el entorno lo permite).
- Puede ser útil para procesos independientes.

### Ejemplo:

```javascript
console.log('Inicio');
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve('Tarea 1'), 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Tarea 2'), 500)),
]).then((resultados) => console.log(resultados));
console.log('Fin');
// Salida: Inicio, Fin, ["Tarea 1", "Tarea 2"]
```

---

## Resumen en texto:

- **Síncrono:** Bloqueante, ejecuta tareas una tras otra.
- **Asíncrono con Callback:** No bloqueante, usa funciones de retorno.
- **Asíncrono con Async/Await:** No bloqueante, más legible que callbacks.
- **Parallel:** Ejecuta múltiples tareas simultáneamente.

```

```
