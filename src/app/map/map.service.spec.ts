import { TestBed, inject } from '@angular/core/testing';

import { MapsService } from './map.service';
import { MapsAPILoader } from 'angular2-google-maps/core';

declare var google: any;

describe('MapsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MapsService, MapsAPILoader]
        });

    });

    it('should load MapsService', inject([MapsService], (_Maps: MapsService) => {
        expect(_Maps.getLatLan).toBeTruthy();
    }));
});
