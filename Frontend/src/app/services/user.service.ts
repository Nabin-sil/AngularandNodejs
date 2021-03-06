import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:3000/api/test/user';
  private pmUrl = 'http://localhost:3000/api/test/pm';
  private adminUrl = 'http://localhost:3000/api/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  getPMBoard(): Observable<any> {
    return this.http.get(this.pmUrl);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.adminUrl);
  }
}
