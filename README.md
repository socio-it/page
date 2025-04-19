This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Metodologia de subida 
### 1. Ir a la rama principal y actualizarla
git checkout main        # Cambiar a la rama 'main' (o 'master')
git pull origin main     # Bajar y fusionar cambios del remoto

### 2. Crear nueva rama para la tarea y entrar en ella
git checkout -b nombre-de-tu-tarea # Crear y cambiar a la nueva rama

### 3. Hacer cambios en archivos... (sin comando, es tu trabajo)

### 4. Preparar cambios para guardar
git add .                # Añadir todos los cambios al 'staging area'

### 5. Guardar cambios (commit local)
git commit -m "Breve descripción de los cambios" # Crear un commit con los cambios stagged

### (Repetir pasos 3 a 5 mientras trabajas)

### 6. Subir tu rama de tarea al remoto (la primera vez usar -u)
git push -u origin nombre-de-tu-tarea # Subir la rama y configurar seguimiento

### (Luego ir a GitHub y crear el Pull Request)

### (En GitHub: Revisar y Fusionar el Pull Request)

### 7. Después de fusionar en GitHub: Actualizar tu rama principal local
git checkout main        # Cambiar de nuevo a la rama principal
git pull origin main     # Bajar la fusión que se hizo en GitHub

### 8. (Opcional) Borrar la rama de tarea (local y remota)
git branch -d nombre-de-tu-tarea     # Borrar la rama local (-D para forzar)
git push origin --delete nombre-de-tu-tarea # Borrar la rama en el remoto