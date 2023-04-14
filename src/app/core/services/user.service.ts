import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInformation } from '../interfaces/user-information.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInformation[]> {
    return this.http.get<UserInformation[]>(`${this.baseurl}/users`)
  }

  getSingleUser(id: number): Observable<UserInformation[]> {
    return this.http.get<UserInformation[]>(`${this.baseurl}/users/${id}`)
  }
}
