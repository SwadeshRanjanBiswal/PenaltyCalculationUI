import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import {PenaltyModel} from 'src/app/Model/penalty-model';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Observable } from 'rxjs';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
@Component({
  selector: 'app-penalty-calc',
  templateUrl: './penalty-calc.component.html',
  styleUrls: ['./penalty-calc.component.css']
})
export class PenaltyCalcComponent implements OnInit {
  public penalty : PenaltyModel[];
  events: string[] = [];
  checkInDate:string;
  checkOutDate:string;
  country:string;
  format:string = "dd/MM/yyyy";
  output:number;
  fine:number = 0;
  constructor(private httpobj : HttpClient) { }
  ngOnInit(): void {
   this.getResponse().subscribe(data => {
      this.penalty = data;
  });
  }
getResponse():Observable<PenaltyModel[]>{
  return this.httpobj.get<PenaltyModel[]>('https://localhost:44372/api/PenaltyCalculation');
}
  clickvaluecheckin(event)
  {
    this.checkInDate = this.CovertDate(event.value.toString());
  }
  clickvaluechekout(event)
  {
    this.checkOutDate = this.CovertDate(event.value.toString());
  }
  CovertDate(date):string
  {
    date = new Date(date);
    let year=date.getFullYear();
    let month=date.getMonth()+1 >9 ? (date.getMonth()+1).toString(): "0"+(date.getMonth()+1).toString();
    let day= date.getDate()+1 >9 ? (date.getDate()+1).toString(): "0"+(date.getDate()+1).toString();
    return day+"/"+month+"/"+year;
  }
  CalculateResponse(){
    
    var model ={
      "checkinDate":this.checkInDate,
      "checkOutDate":this.checkOutDate,
      "countries":this.country,
      "holidays":this.penalty.filter(x => x.country == "Dubai")[0].holiday.split(','),
      "weekend":this.penalty.filter(x => x.country == "Dubai")[0].weekend.split(',')
    };
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'POST','Access-Control-Allow-Origin':'*' };
    this.httpobj.post<number>('https://localhost:44372/api/PenaltyCalculation',model,{headers}).subscribe(data => {
     
      this.output = data;
      if(this.output > 10)
      {
         this.fine = (this.output - 10) * 5;
      }
  });
  }
  countryChange(event):void
  {
    this.country = event.target.value;
  }
}
