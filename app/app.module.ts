import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DebtComponent } from './component/debt/debt.component';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './component/home/home.component';
import { AddcardComponent } from './component/addcard/addcard.component';
import { AdddebtComponent } from './component/adddebt/adddebt.component';

@NgModule({
  declarations: [
    AppComponent,
    DebtComponent,
    CardComponent,
    HomeComponent,
    AddcardComponent,
    AdddebtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }