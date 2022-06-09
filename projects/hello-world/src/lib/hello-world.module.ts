import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';
import {MyLib2Module} from 'my-lib2'


@NgModule({
  declarations: [
    HelloWorldComponent
  ],
  imports: [
    MyLib2Module
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class HelloWorldModule { }
