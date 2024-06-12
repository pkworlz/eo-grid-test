import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./pages/test-page/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'itemlist',
    loadChildren: () => import('./pages/itemlist/itemlist.module').then( m => m.ItemlistPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
