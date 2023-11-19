import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task5';

  Name="";
  Username="";
  phone="";

  custmer:any[]=[
    { Name:"mohamed" , Username:"hamada" , phone:"1364477697894"}]
  addcustmer() {
    this.custmer.push({ Name:"new" , Username:"new" , phone:"1369789"});
    console.log("test");
  }
}
