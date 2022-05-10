import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    errorState;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    submit(code) {
        let str = code.toLowerCase();
        if(str == 'strawberry' ){
            this.router.navigate(['/reveal'], {queryParams: {passcode: str}})
        }
        else {
            this.errorState = true;
        }
    }

}
