import {
	MatButtonModule,
	MatCheckboxModule,
	MatCardModule,
	MatInputModule
} from "@angular/material";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
	imports: [
		MatButtonModule,
		MatCheckboxModule,
		MatListModule,
		MatCardModule,
		MatDialogModule,
		MatInputModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatListModule,
		MatCardModule,
		MatDialogModule,
		MatInputModule
	]
})
export class MaterialModule {}
