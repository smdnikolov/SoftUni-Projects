import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RequestTrekComponent } from './request-trek/request-trek.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditComponent } from './edit/edit.component';
import { NotLoggedComponent } from './not-logged/not-logged.component';
import { AlreadyLoggedInComponent } from './already-logged-in/already-logged-in.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'request',
    component: RequestTrekComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'not-logged-in',
    component: NotLoggedComponent
  },
  {
    path: 'already-logged-in',
    component: AlreadyLoggedInComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
