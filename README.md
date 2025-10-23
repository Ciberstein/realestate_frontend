# RealEstate.Frontend — README

## Requisitos
- Node.js (recomendado >= 16)
- npm o yarn
- Git

## Pasos para iniciar

1. Clonar el repositorio
```bash
git clone <REPO_URL>
cd RealEstate.Frontend
```

2. Instalar dependencias
```bash
# con npm
npm install

# o con yarn
yarn
```

3. Crear y configurar el archivo .env
- No commitear `.env`. Asegúrate de que esté en `.gitignore`.
- El prefijo de las variables depende del bundler:
    - create-react-app: usa `REACT_APP_...`
    - Vite: usa `VITE_...`
- Archivo ejemplo `.env.example` (ajusta según tu proyecto):
```env
# Ejemplo para create-react-app
REACT_APP_API_URL=https://api.example.com
REACT_APP_AUTH_TOKEN=replace_with_token
REACT_APP_NODE_ENV=development
REACT_APP_PUBLIC_URL=/

# Ejemplo para Vite (si aplica)
VITE_API_URL=https://api.example.com
VITE_AUTH_TOKEN=replace_with_token
VITE_NODE_ENV=development
```

4. Ejecutar en modo development
```bash
# npm
npm run dev

# yarn
yarn dev
```

5. Generar build de producción
```bash
npm run build
# o
yarn build
```

## Detección del prefijo correcto
- Abre `package.json` y revisa los scripts o revisa la config del bundler (CRA / Vite / Next). Usa el prefijo que el proyecto espera (`REACT_APP_` o `VITE_`).

## Problemas comunes
- Error de variables: revisa que `.env` esté en la raíz del proyecto y reinicia el servidor después de modificarlo.
- Permisos en Windows: si usas PowerShell, ejecuta comandos en una terminal con permisos normales; Git Bash funciona bien.
- Dependencias faltantes: borrar `node_modules` y ejecutar `npm install` otra vez.

## Buenas prácticas
- Mantén secretos fuera del repo.
- Guarda un `.env.example` con claves y formato (sin valores reales).
- Documenta variables nuevas en este README.