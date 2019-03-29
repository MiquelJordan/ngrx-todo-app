import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoDetailComponent } from "./todo-detail.component";
import { MaterialModule } from "src/app/modules/material.module";
import { MatCardModule } from "@angular/material";
import { AppRoutingModule } from "src/app/app-routing.module";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { StoreModule, Store, StateObservable } from "@ngrx/store";
import { TodoReducer } from "src/app/store/todo/todo.reducer";
import { AppState } from "src/app/store/todo/todo.state";
describe("TodoDetailComponent", () => {
	let component: TodoDetailComponent;
	let fixture: ComponentFixture<TodoDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MaterialModule,
				AppRoutingModule,
				StoreModule.forRoot(TodoReducer)
			],
			declarations: [TodoDetailComponent, TodoListComponent],
			providers: [Store]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TodoDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
