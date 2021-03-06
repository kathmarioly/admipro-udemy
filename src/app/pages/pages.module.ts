import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Componentes:
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
// Modulos:
import { SharedModule } from '../shared/shared.module';
// Ng2-chart:
import { ChartsModule } from 'ng2-charts';
// Rutas:
import { PAGES_ROUTES } from './pages.routes';
// Temporales:
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
   declarations : [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent

   ],
   exports : [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
   ],
   imports : [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,

     ],
})

export class PagesModule { }
