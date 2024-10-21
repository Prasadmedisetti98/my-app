import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles: any = [];
  term: string = "";
  column: string = "";
  order: string = "";
  public page: number = 1;

  constructor(private _vehicleService: VehicleService) {

    _vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }
  search() {
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }
  sort() {
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }

  pagination() {
    this._vehicleService.getPagedVehicles(this.page).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert(err.error);
      }
    )
  }

  delete(id: string) {
    this._vehicleService.deleteVehicle(id).subscribe(
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
