import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


export class User {
  firstName: string;
  id: number;
}

interface Todo {
  id: number;
  serviceName: string ;
  maxDuration: string;
  price: number;
}

export interface Job {
  id: number;
  jobTitle: string ;
  times: string;
}

export interface Jobname {
  id: number;
  jobTitle: string;
  services: Todo;
}

// tslint:disable-next-line:class-name
export class services {
  id: number;
  serviceName: string ;
  maxDuration: string;
  price: number;
  constructor() {
  }
}
@Injectable({providedIn: 'root'})
export class TodoService {
  // constructor(private http: HttpClient) { }
    public todos: Todo[] = [];
    public job: Jobname[] = [];
    name = '';

    constructor(private http: HttpClient) {}

    onNameKeyUp(event: any) {
      this.name = event.target.value;
    }
    getProfile() {
      console.log(this.name);
      this.http.get('https://cleo-beauty.herokuapp.com/api/helloWorld/listObject')
        .subscribe(
        (data: any[]) => {
          console.log(data); }
        );
      }

    postProfile() {
      console.log(this.name);
      this.http.post('https://cleo-beauty.herokuapp.com/api/helloWorld/listObject',
        {
          name: 'Lesha',
          duration: 3
        })
        .subscribe(
          (data: any) => {
            console.log(data);
          }
        );
    }

    fetchTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://cleoapp.herokuapp.com/api/jobs')
          .pipe(tap(todos => this.todos = todos));
    }
    jobTodos(): Observable<Jobname[]> {
      return this.http.get<Jobname[]>('https://cleoapp.herokuapp.com/api/jobs')
        .pipe(tap(job => this.job = job));
      }
    postData() {
      this.http.post('https://cleo-beauty.herokuapp.com/api/helloWorld/listObject', {
          name: 'Lesha',
          duration: 3
        })
        .subscribe(
        (data: any) => {
          console.log(data);
        }
      );
    }
}

