import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {BannerComponent} from './banner-inline.component';


describe('Banner Component (inline template)', () => {
    let comp: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // run before each 'it'
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent]
        });

        fixture = TestBed.createComponent(BannerComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });

    it('should display original title', () => {
        // need to manually call change detection before each test. Otherwise, set ComponentFixtureAutoDetect to true.
        // Checkout detect-changes.spec.ts
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });

    it('no title in the DOM until manually calling `detect changes`', () => {
        expect(el.textContent).toEqual('');
    });
});
