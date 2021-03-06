import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

// Temporal
import { FormsModule } from '@angular/forms';

// Servicios
import { ServiceModule } from './services/service.module';
/* import { SettingsService } from './services/settings/settings.service'; */

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
