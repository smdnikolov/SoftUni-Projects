import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [NavigationComponent, HomeComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigationComponent, HomeComponent, FooterComponent]
})

export class CoreModule { }
