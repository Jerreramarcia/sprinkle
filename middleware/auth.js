export default function ({ redirect }) {
    const userIsLoggedIn = false; // Cambia esto según la lógica de autenticación
  
    if (!userIsLoggedIn) {
      return redirect('/login'); // Redirige al usuario a /login si no está autenticado
    }
  }
  