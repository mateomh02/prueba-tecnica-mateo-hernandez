Configuración del Token TMDB
Para que la aplicación funcione correctamente, necesitas configurar tu token de acceso de TMDB (The Movie Database). Sigue estos pasos:

1. Regístrate en TMDB
2. Genera un nuevo token de acceso API (Read Access Token)
5. En la raíz del proyecto, crea un archivo .env.local si no existe
6. Agrega o modifica la siguiente variable: NEXT_PUBLIC_TMDB_TOKEN=tu_token_aqui
    Reemplaza tu_token_aqui con el token que generaste en TMDB.

INICIAR EL PROYECTO
1. Instala dependencias con "npm install"
2. Inicia el servidor de desarollo "npm run dev"