import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PenaltyCalcComponent } from './PenaltyCalc/penalty-calc/penalty-calc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
@NgModule({
  declarations: [
    AppComponent,
    PenaltyCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
