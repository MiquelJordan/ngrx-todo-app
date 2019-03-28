import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoListComponent } from "./todo-list.component";
import { MaterialModule } from "src/app/modules/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { StoreModule } from "@ngrx/store";
import { TodoReducer } from "src/app/store/todo/todo.reducer";
import { TodoEditionComponent } from "../todo-edition/todo-edition.component";
import { TodoDetailComponent } from "../todo-detail/todo-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("TodoListComponent", () => {
	let component: TodoListComponent;
	let fixture: ComponentFixture<TodoListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				TodoEditionComponent,
				TodoListComponent,
				TodoDetailComponent
			],
			imports: [
				MaterialModule,
				BrowserAnimationsModule,
				AppRoutingModule,
				StoreModule.forRoot(TodoReducer),
				FormsModule,
				ReactiveFormsModule
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TodoListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
