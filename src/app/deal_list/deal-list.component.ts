import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealListComponent {
  title = 'benepikTask';
  dealsList: any = [];
  constructor(private appService: AppService, private router:Router) {
  }

  ngOnInit() {
    this.getDealsData();
  }

  /**
   * API Call for getting all deals
   */
  getDealsData() {
    let dealData = {
      clientId: "CO-28",
      employee_id: 87,
      device: "2",
      device_id: "browser",
      app_version: "84",
      latitude: 28.4126149,
      longitude: 77.0437248,
      prevDealId: "",
      appVersion: "84"
    }
    this.appService.getAllDeals(dealData).subscribe((response: any) => {
      this.dealsList = response.data;
    })
  }

  /**
   * navigate to deal details page
   * @param id send id in params
   */
  navigateToDetails(id){
    this.router.navigate(['/deal-details'], {
      queryParams: {
        id: id,
      },
    });
  }
  
}
