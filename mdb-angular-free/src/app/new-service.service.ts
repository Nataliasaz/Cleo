import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export interface Todo {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  constructor(private http: HttpClient) { }
  public todos: Todo[] = [
    {id: 1, title: 'ddd'},
    {id: 1, title: 'ddd'}
  ];
}

