import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @HostListener('window:beforeunload', ['$event'])
  public beforeunloadHandler($event: any) {
  localStorage.removeItem('AdminToken');
  console.log("Admin token is removed")
  }

 
}
