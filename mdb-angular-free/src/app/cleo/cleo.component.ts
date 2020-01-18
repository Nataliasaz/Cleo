import {Component, OnInit} from '@angular/core';
import {TodoService} from '../shared/todos.service';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cleo',
  templateUrl: './cleo.component.html',
  styleUrls: ['./cleo.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class CleoComponent implements OnInit {
  validatingForm: FormGroup;
  private loading = true;
  elements: any = [
    { first: 'Парикмахерский', last: 'Стрижка мужская', handle: 'от 200'},
    { first: ' ', last: 'Стрижка женская', handle: 'от 500'},
    { first: '', last: 'Укладка волос', handle: 'от 300'},
    { first: '', last: 'Мелирование волос', handle: 'от 700'},
    { first: '', last: '', handle: ''},
    { first: 'Маникюр/педикюр', last: 'Маникюр', handle: 'от 500'},
    { first: '', last: 'Педикюр', handle: 'от 400'},
    { first: '', last: 'Покрытие гель лаком', handle: 'от 600'},
    { first: '', last: '', handle: ''},
    { first: 'Визаж', last: 'Маникюр', handle: 'от 500'},
    { first: '', last: 'Окраска бровей', handle: 'от 200'},
    { first: '', last: 'Наращивание ресниц', handle: 'от 800'},
    { first: '', last: 'Ламенирование ресниц', handle: 'от 900'},
  ];

  headElements = ['', 'Зал', 'Услуга', 'Цена'];
  constructor(private todosService: TodoService) {
  }
  ngOnInit() {
     this.todosService.fetchTodos().subscribe(() => {
       this.loading = false;
     });
     this.todosService.jobTodos().subscribe(() => {
        this.loading = false;
      });
     this.validatingForm = new FormGroup({
      signupFormModalName: new FormControl('', Validators.required),
      signupFormModalNumber: new FormControl('', Validators.maxLength(11)),
      signupFormModalPassword: new FormControl('', Validators.required),
    });
  }
  get signupFormModalName() {
    return this.validatingForm.get('signupFormModalName');
  }
  get signupFormModalNumber() {
    return this.validatingForm.get('signupFormModalNumber');
  }

  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }

}
