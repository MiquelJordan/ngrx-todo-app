import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';


import * as TodoReducer from './store/todo/todo.reducer'
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './modules/material.module';
import { TodoEffects } from './store/todo/todo.effects';
import { EffectsModule } from '@ngrx/effects';
import { MockService } from './services/mock/mock.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TodoDetailComponent } from './components/todo/todo-detail/todo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({ todos: TodoReducer.TodoReducer }),
    EffectsModule.forRoot([TodoEffects]),
    MaterialModule,
    FlexLayoutModule

  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
