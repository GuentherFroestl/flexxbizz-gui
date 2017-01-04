import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {UiComponentsModule} from '../../../ui-components/src/ui-components.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UiComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
