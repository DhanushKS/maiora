import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
