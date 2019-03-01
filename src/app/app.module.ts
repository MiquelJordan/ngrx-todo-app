import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo/todo-list-item/todo-list-item.component';


import * as TodoReducer from './store/todo/todo.reducer'
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './modules/material.module';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({ todos: TodoReducer.TodoReducer }),
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
