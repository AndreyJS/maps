import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MapsService } from './map/map.service';
import { MdCardModule, MdGridListModule, MdInputModule } from '@angular/material';

describe('AppComponent', () => {

    let fixture; 

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,  
            ],
            imports: [MdInputModule],
            providers: [
                { provide: MapsService }
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
    }));

    //   it('should create the app', async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app).toBeTruthy();
    //   }));

    //   it(`should have as title 'app works!'`, async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app.title).toEqual('app works!');
    //   }));

    //   it('should render title in a h1 tag', async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h1').textContent).toContain('app works!');
    //   }));


    it('should get coords', async(() => {
        fixture.componentInstance.getLatLan('moscow')
            .subscribe(result => {
            expect(result.lat()).toBe(55.755826);
            expect(result.lng()).toBe(37.6173);
        });
    }));
});
