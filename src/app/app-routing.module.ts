import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './services/guard.service';
import { HomeComponent } from './views/home/home.component';
import { RevealComponent } from './views/reveal/reveal.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'reveal',
        component: RevealComponent,
        canActivate: [GuardService]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
