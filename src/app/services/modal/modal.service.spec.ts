import { TestBed } from "@angular/core/testing";

import { ModalService } from "./modal.service";
import { MaterialModule } from "src/app/modules/material.module";

describe("ModalService", () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [MaterialModule]
		})
	);

	it("should be created", () => {
		const service: ModalService = TestBed.get(ModalService);
		expect(service).toBeTruthy();
	});
});
