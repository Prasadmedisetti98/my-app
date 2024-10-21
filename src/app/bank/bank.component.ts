import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  banks: any = [];
  public page: number = 1;
  term: string = "";
  column: string = "";
  order: string = "";

  public bankForm: FormGroup= new FormGroup({

    account_name: new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profile_picture:new FormControl()
  });


  constructor(private _bankService: BankService) {
    _bankService.getBanks().subscribe(

      (data: any) => {
        this.banks = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }

  search() {
    this._bankService.getFilteredBanks(this.term).subscribe(
      (data: any) => {
        this.banks = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }

  pagination() {
    this._bankService.getPagedBanks(this.page).subscribe(
      (data: any) => {
        this.banks = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }

  sort() {
    this._bankService.getSortedBanks(this.column, this.order).subscribe(
      (data:any)=>{
        this.banks = data;
      },
      (err:any)=>{
        alert(err.error);}
    )
  }

  submit(){
    console.log(this.bankForm);
  
  this._bankService.createAccount(this.bankForm.value).subscribe(
    (data:any)=>{
      alert("created successfully...!!!")
    },
    (err:any)=>{
      alert(err.error);
    }

  )
}

delete(id: string) {
  this._bankService.deleteAccount(id).subscribe(
    (data: any) => {
      alert("Deleted Successfully");
      location.reload();
    },
    (err: any) => {
      alert(err.error);
    }
  )
}

}
