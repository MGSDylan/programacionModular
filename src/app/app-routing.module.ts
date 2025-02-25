import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { CustomPreloadService } from './services/custom-preload.service';
import { AdminGuard } from './guards/admin.guard';





const routes: Routes = [
  
  { path: '', loadChildren:()=> import('./webside/webside.module').then(m=>m.WebsideModule),
   data: {
      preload:true
    }
   },
  { path: 'cms', loadChildren:()=> import('./cms/cms.module').then(m=>m.CmsModule),canActivate:[AdminGuard] },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    //preloadingStrategy:PreloadAllModules//PRECARGA TODOS LOS MODULOS
    //preloadingStrategy:CustomPreloadService//PRECARGA personalizada de MODULOS
    preloadingStrategy:PreloadAllModules//PRECARGA personalizada de MODULOS
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
