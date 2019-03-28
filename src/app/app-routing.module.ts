import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo/todo-detail/todo-detail.component';

const routes: Routes = [
  { path: 'list', component: TodoListComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: '**', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
