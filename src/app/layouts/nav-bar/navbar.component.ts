import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

    _dataPassing = 'Data Pass';
    @Input()
    get dataPassing(): any {
        return this._dataPassing;
    }
    set dataPassing(value: any) {
        this._dataPassing = value;
    }

    constructor() { }
    ngOnInit() {

    }
}