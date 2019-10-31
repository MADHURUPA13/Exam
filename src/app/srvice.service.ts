import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SrviceService {

  constructor(private htt:HttpClient) { }

  my()
  {
    return this.htt.get("https://hn.algolia.com/api/v1/search_by_date?tags=story");
  }
}
