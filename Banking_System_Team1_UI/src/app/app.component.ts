import { Component, HostListener} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  
//   constructor(private router: Router) {
//     this.router.events.subscribe((ev) => {
//       if (ev instanceof NavigationEnd) {

//         const user = sessionStorage.getItem("AdminToken");
//         if (user != "null") {
//             this.router.navigate(['adminview']);
//       }
//     }
    
//   })
// }




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
