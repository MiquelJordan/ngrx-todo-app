import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatListModule, MatCardModule],
    exports: [MatButtonModule, MatCheckboxModule, MatListModule, MatCardModule],
})
export class MaterialModule { }