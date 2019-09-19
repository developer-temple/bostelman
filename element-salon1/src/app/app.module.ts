import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

//Services
import { HelpersService } from './helpers.service';
import { ShopService } from './shop.service';

//Components
import { AppComponent } from './app.component';
import { CenteredComponent } from './centered/centered.component';

import { MastheadComponent } from './masthead/masthead.component';

import { HelloComponent } from './hello/hello.component';

import { BlondeComponent } from './blonde/blonde.component';

import { ServicesComponent } from './services/services.component';
import { ServicesGridComponent } from './services/servicesGrid/servicesGrid.component';

import { BrunetteComponent } from './brunette/brunette.component';

import { ShopComponent } from './shop/shop.component';

import { ScarfComponent } from './scarf/scarf.component';

import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contactForm/contactForm.component';

import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CartComponent } from './cart/cart.component';
import { ShopItemComponent } from './shop-item/shop-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CenteredComponent,
    FooterComponent,
    MastheadComponent,
    HelloComponent,
    ServicesComponent,
    ServicesGridComponent,
    ShopComponent,
    ContactComponent,
    ContactFormComponent,
    BlondeComponent,
    BrunetteComponent,
    ScarfComponent,
    ToolbarComponent,
    CartComponent,
    ShopItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    HelpersService,
    ShopService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}