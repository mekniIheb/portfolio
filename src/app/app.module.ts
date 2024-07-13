import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {IntoComponent} from './into/into.component';
import {AboutComponent} from './about/about.component';
import {NgxTypedJsModule} from "ngx-typed-js";
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';
import {WorkComponent} from './work/work.component';
import {BlogComponent} from './blog/blog.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "./app.translate-loader";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatOption} from "@angular/material/core";
import {NgOptimizedImage} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";

import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import {LightboxModule} from "ngx-lightbox";
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    IntoComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    WorkComponent,
    BlogComponent,
    ScrollToTopComponent,
    LoaderComponent
  ],
    imports: [
        LightboxModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxTypedJsModule,
        BrowserModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatFormFieldModule,
        MatSelectModule,
        NgOptimizedImage,
        FormsModule,
        DropdownModule,
        ReactiveFormsModule,

    ],
  providers: [TranslateModule],
  bootstrap: [AppComponent], schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
}
