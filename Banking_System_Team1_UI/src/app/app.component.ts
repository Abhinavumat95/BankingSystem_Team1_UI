import { Component, HostListener, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  ngOnDestroy(): void {
 
  }

  // @HostListener('window:beforeunload', ['$event'])
  // public beforeunloadHandler($event: any) {
  // localStorage.removeItem('AdminToken');
  // console.log("Admin token is removed")
  // }

  // @HostListener("window:onbeforeunload",["$event"])
  //   clearLocalStorage(){
  //     localStorage.removeItem('AdminToken');
  //   }
  

 
}
