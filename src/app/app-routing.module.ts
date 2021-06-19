import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { RegioesPageComponent } from './components/regioes-page/regioes-page.component';
import { TransmissorPageComponent } from './components/transmissor-page/transmissor-page.component';

const routes: Routes = [{
  path: '',
  component: MenuTemplateComponent,
  children: [
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'transmissor',
      component: TransmissorPageComponent
    },
    {
      path: 'regioes',
      component: RegioesPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
