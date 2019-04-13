import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { BackendComponent } from './paginas/backend/backend.component';
import { FrontendComponent } from './paginas/frontend/frontend.component';
import { SobreComponent } from './paginas/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'backend', component: BackendComponent },
  { path: 'frontend', component: FrontendComponent },
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
