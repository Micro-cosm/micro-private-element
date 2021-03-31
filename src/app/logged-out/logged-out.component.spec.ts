

import {	async,
			ComponentFixture,
			TestBed				} from '@angular/core/testing';
import {	LoggedOutComponent		} from './home.component';
import {}	from 'jasmine';


describe('HomeComponent', () => {
	let component:	LoggedOutComponent;
	let fixture:	ComponentFixture<LoggedOutComponent>;
	
	beforeEach( async(() => TestBed.configureTestingModule({ declarations: [LoggedOutComponent]}).compileComponents()));
	
	beforeEach(() => {
		fixture		= TestBed.createComponent( LoggedOutComponent );
		component	= fixture.componentInstance;
		
		fixture.detectChanges();
	});
	
	it('should create', () => expect( component ).toBeTruthy());
});
