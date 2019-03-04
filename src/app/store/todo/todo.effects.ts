import { TodoState } from './todo.state';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, tap, switchMap } from 'rxjs/operators';



import * as TodoActions from './todo.action';

import { HttpClient } from '@angular/common/http';
import { MockService } from 'src/app/services/mock/mock.service';

@Injectable()
export class TodoEffects {

    constructor(
        private mockSRV: MockService,
        private actions$: Actions
    ) { }
    @Effect()
    GetTodos$: Observable<Action> = this.actions$.pipe(
        ofType(TodoActions.GET_TODOS),
        switchMap((action) => {
            console.log("switch map ", action)
            return this.mockSRV.getMockTodos()
        }),
        map((data) => {
            console.log("----------->get effect", data)
            return new TodoActions.GetTodosSuccess(data)

        })
    );
    @Effect()
    UpdateTodo$: Observable<Action> = this.actions$.pipe(
        ofType(TodoActions.UPDATE_TODO),
        //http request
        map((data) => {
            console.log("----------->update effect", data)
            return new TodoActions.UpdateTodoSuccess(data)
        })

    );


}
