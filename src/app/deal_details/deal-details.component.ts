import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { DealsDetailsModel } from './deal-details.model';

@Component({
  selector: 'app-root',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.css']
})
export class DealComponent {
    singleDealData: any;
    dealId: any;
    dealModel:DealsDetailsModel = new DealsDetailsModel();

  constructor(private appService: AppService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
        this.dealId = params.id;
        console.log("this.dealId", this.dealId)
    });
    this.getSingleDealData();
  }

   /**
   * API Call for getting single deal details
   */
     getSingleDealData() {
        let sendId = {
          clientId:"CO-28",
          employee_id:87,
          appVersion:"84",
          dealId:this.dealId,
        }
        this.appService.getDealDetails(sendId).subscribe((response: any) => {
          this.singleDealData = response;
          this.dealModel = response.data;
        })
      }
 
}
