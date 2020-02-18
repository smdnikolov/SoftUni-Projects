import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RequestTrekComponent } from './request-trek/request-trek.component'
import { DetailsComponent } from './details/details.component'
import { EditComponent } from './edit/edit.component';
import { NotLoggedComponent } from './not-logged/not-logged.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { MatchPasswordsDirective } from './custom-directives/match-passwords.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { AlreadyLoggedInComponent } from './already-logged-in/already-logged-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    RequestTrekComponent,
    NotFoundComponent,
    DetailsComponent,
    EditComponent,
    NotLoggedComponent,
    MatchPasswordsDirective,
    AlreadyLoggedInComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
