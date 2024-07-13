import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

declare var initCustomJs: any;

interface Language {
  code: string;
  label: string;
  flagUrl: string;
}

export interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements AfterViewInit,OnInit {
  loading = true;
  title = 'portfolio';

  ngAfterViewInit() {
    initCustomJs();

  }

  constructor(private translate: TranslateService) {
  }

  switchLanguage(language: string) {
    console.log("language" + language)

    this.translate.use(language);
  }


  ngOnInit(): void {
    this.switchLanguage('en')

  }
}
