import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurdService {

  constructor(private _router:Router ) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

      //check some condition  
      const user = sessionStorage.getItem("AdminToken");
      if (user != null)  {
          return true;
      }else{

        alert('You are not allowed to view this page');
        return false;
      }
      
  }
}
