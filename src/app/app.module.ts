import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { LearningPackagesComponent } from './Components/learning-packages/learning-packages.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { NewsletterComponent } from './Components/newsletter/newsletter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    LearningPackagesComponent,
    CarouselComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
