// @ng
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// @components
import { HomeViewComponent } from 'src/app/views/home-view/home-view.component';
import { ServicesViewComponent } from 'src/app/views/services-view/services-view.component';
import { ShopViewComponent } from 'src/app/views/shop-view/shop-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'services', component: ServicesViewComponent },
  { path: 'shop', component: ShopViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
class AppRoutingModule { }

export {
  AppRoutingModule
};
