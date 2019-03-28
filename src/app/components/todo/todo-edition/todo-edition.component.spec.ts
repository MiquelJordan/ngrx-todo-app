import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoEditionComponent } from "./todo-edition.component";
import { MaterialModule } from "src/app/modules/material.module";
import { AppRoutingModule } from "src/app/app-routing.module";
import { StoreModule } from "@ngrx/store";
import { TodoReducer } from "src/app/store/todo/todo.reducer";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { TodoDetailComponent } from "../todo-detail/todo-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("TodoEditionComponent", () => {
	let component: TodoEditionComponent;
	let fixture: ComponentFixture<TodoEditionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MaterialModule,
				BrowserAnimationsModule,
				AppRoutingModule,
				StoreModule.forRoot(TodoReducer),
				FormsModule,
				ReactiveFormsModule
			],
			declarations: [
				TodoEditionComponent,
				TodoListComponent,
				TodoDetailComponent
			],
			providers: [{ provide: MatDialogRef, useValue: {} }]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TodoEditionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
