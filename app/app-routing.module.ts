import { AdddebtComponent } from './component/adddebt/adddebt.component';
import { AddcardComponent } from './component/addcard/addcard.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { DebtComponent } from './component/debt/debt.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'debts', component: DebtComponent},
  {path: 'cards', component: CardComponent},
  {path: 'addcard', component: AddcardComponent},
  {path: 'adddebt', component: AdddebtComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
