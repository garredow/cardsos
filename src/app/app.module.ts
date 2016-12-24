import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App Root
import { AppComponent } from './app.component';

// Feature Modules
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
