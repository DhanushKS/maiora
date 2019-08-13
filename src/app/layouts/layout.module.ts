import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './nav-bar/navbar.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppContentLayoutComponent } from './content/content-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    exports: [
        NavbarComponent,
        AppContentLayoutComponent,
        FooterComponent
    ],
    declarations: [
        NavbarComponent,
        AppContentLayoutComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [],
    entryComponents: []
})

export class AppLayoutModule { }
