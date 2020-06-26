import { Component, OnInit } from '@angular/core';
import { DebtService } from './debt.service';
import { Debt } from './../../models/debt';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {
  debts: Array<any> = new Array()
  error: any
  constructor(private debtService: DebtService) { 
    this.getUserDebts()
  }

  ngOnInit() {}
  
    getUserDebts() {
      this.debtService.getDebt().subscribe(
        data => {
          this.debts = data
      }, error => {
          this.error = error
          console.error(error)
      })
    }

    deleteDebt(debt: Debt) {
      this.debtService.deleteDebt(debt).subscribe(() => {
        this.getUserDebts();
      });
      this.debts.pop()
    }  
}
