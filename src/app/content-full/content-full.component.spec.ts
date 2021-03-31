

import {	async,
			ComponentFixture,
			TestBed					} from '@angular/core/testing';
import {	ContentFullComponent	} from '../content-full/content-full.component';


describe('ContentFullComponent', () => {
	let component:	ContentFullComponent;
	let fixture:	ComponentFixture<ContentFullComponent>;

	beforeEach( async(() => {
		TestBed.configureTestingModule({ declarations: [ContentFullComponent]}).compileComponents();
	}));

	beforeEach(() => {
		fixture		= TestBed.createComponent( ContentFullComponent );
		component	= fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => { expect( component ).toBeTruthy();});
});
