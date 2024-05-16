import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Verificar si localStorage está disponible
if (!localStorage) {
  console.error('El navegador no admite localStorage. La aplicación no puede funcionar correctamente.');
} else {
  // Configurar localStorage según sea necesario
  // Por ejemplo, aquí podrías inicializar algún valor o establecer alguna configuración predeterminada
  localStorage.setItem('isLoggedIn', 'false');
}


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
