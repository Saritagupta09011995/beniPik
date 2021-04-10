import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';
import { SwUpdate } from '@angular/service-worker';
@Injectable()
export class AppService {
 token = "ZTk0dUhmbS93SzNMSHFRTlpSV1lQdz09OjrsbeVV2DbjoKnoyJxEvX3C";
 authorizedToken: string;
 authorizedHeader = new HttpHeaders();

  constructor(private http:HttpClient,
              private swUpdate: SwUpdate) {}

  getAllDeals(data){
    this.getAuthToken();
    const apiUrl = 'https://benepik.in/bestie/bestiePrivilege/api/v1/deal/all'
    return this.http.post(apiUrl, data, {headers: this.authorizedHeader});
  }

  getDealDetails(data){
    const apiUrl = 'https://benepik.in/bestie/bestiePrivilege/api/v1/deal/detail'
    return this.http.post(apiUrl, data, {headers: this.authorizedHeader} );
  }

  getAuthToken() {
    const authToken = this.token;
    this.authorizedToken = authToken ? authToken : '';
    this.authorizedHeader = new HttpHeaders()
      .set('Authorization', this.authorizedToken)
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Methods', 'GET, POST, PUT');
  }

  
}
