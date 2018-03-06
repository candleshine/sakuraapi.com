import {CommonModule}      from '@angular/common';
import {NgModule}          from '@angular/core';
import {ComponentsModule}  from '../shared/components/components.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent}     from './home.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
