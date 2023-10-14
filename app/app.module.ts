import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { DetailsComponent } from './pages/details/details.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameTitleCardComponent } from './components/game-details/game-title-card/game-title-card.component';
import { GameInfoCardComponent } from './components/game-details/game-info-card/game-info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    DetailsComponent,
    GameDetailsComponent,
    GameTitleCardComponent,
    GameInfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
