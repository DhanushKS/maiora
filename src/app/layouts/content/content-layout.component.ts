import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-image-show-bar',
    templateUrl: './content-layout.component.html',
    styleUrls: ['./content-layout.component.scss']
})

export class AppContentLayoutComponent implements OnInit, AfterViewInit {
    dataPassing: any;
    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        console.log(this.dataPassing, 'CONTENT');
    }

}