import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BannerComponent} from './banner.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('Banner Component', () => {
    let fixture: ComponentFixture<BannerComponent>;
    let comp: BannerComponent;
    let de: DebugElement;
    let el: HTMLElement;

    // use async() to give the Angular template compiler some time to read the external files
    // dont need async() and compileComponents() in CLI environment because it compiles the app before running the tests
    //  but need it in non-CLI environment like plunker
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent]
        })
            .compileComponents();  // inline the template & css
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BannerComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.query(By.css('h1')).nativeElement;
    });

    it('should create Banner Component', () => {
        // a good test to check if the component is set up correctly.
        expect(comp).toBeDefined();
    });

    // it('should display original title', () => {
    //     fixture.detectChanges();
    //     expect(el.textContent).toContain(comp.title);
    // });

    // it('should still keep original title', () => {
    //     fixture.detectChanges();
    //     const oldTitle = comp.title;
    //     comp.title = 'New Title';
    //     expect(el.textContent).toContain(oldTitle);
    // });
});
