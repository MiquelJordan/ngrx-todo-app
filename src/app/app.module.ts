import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./components/todo/todo-list/todo-list.component";

import * as TodoReducer from "./store/todo/todo.reducer";
import { StoreModule } from "@ngrx/store";
import { MaterialModule } from "./modules/material.module";
import { TodoEffects } from "./store/todo/todo.effects";
import { EffectsModule } from "@ngrx/effects";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TodoDetailComponent } from "./components/todo/todo-detail/todo-detail.component";
import { TodoEditionComponent } from "./components/todo/todo-edition/todo-edition.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { MockDataService } from "./services/mock/mock-data.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [
		AppComponent,
		TodoListComponent,
		TodoDetailComponent,
		TodoEditionComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		StoreModule.forRoot({ todoState: TodoReducer.TodoReducer }),
		EffectsModule.forRoot([TodoEffects]),
		MaterialModule,
		FlexLayoutModule,
		HttpClientModule,
		InMemoryWebApiModule.forRoot(MockDataService)
	],
	exports: [MaterialModule],

	entryComponents: [TodoEditionComponent, TodoDetailComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
