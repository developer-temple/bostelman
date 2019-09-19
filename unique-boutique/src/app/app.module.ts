// @ng
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// @modules
import { AppRoutingModule } from 'src/app/app-routing.module';

// @components
import { AppComponent } from 'src/app/app.component';

import { HomeViewComponent } from 'src/app/views/home-view/home-view.component';
import { ServicesViewComponent } from 'src/app/views/services-view/services-view.component';
import { ShopViewComponent } from 'src/app/views/shop-view/shop-view.component';

import { DesktopContainerComponent } from 'src/app/shared/desktop-container/desktop-container.component';
import { MobileContainerComponent } from 'src/app/shared/mobile-container/mobile-container.component';
import { ToolbarComponent } from 'src/app/shared/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ServicesViewComponent,
    ShopViewComponent,
    DesktopContainerComponent,
    MobileContainerComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
class AppModule { }

export {
  AppModule
};
