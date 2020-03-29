import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotLoggedComponent } from './not-logged.component';




const routes: Routes = [
    {
        path: 'not-logged-in',
        component: NotLoggedComponent,
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class notLoggedRoutingModule { }