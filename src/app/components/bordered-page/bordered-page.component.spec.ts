import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import {BorderedPageComponent} from "./bordered-page.component";

describe("BorderedPageComponent", () => {
    let component: BorderedPageComponent;
    let fixture: ComponentFixture<BorderedPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BorderedPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BorderedPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
