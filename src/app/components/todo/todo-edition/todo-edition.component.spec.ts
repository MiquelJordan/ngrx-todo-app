import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoEditionComponent } from "./todo-edition.component";

describe("TodoEditionComponent", () => {
	let component: TodoEditionComponent;
	let fixture: ComponentFixture<TodoEditionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TodoEditionComponent]
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
