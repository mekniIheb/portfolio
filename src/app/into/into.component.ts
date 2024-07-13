import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-into',
  templateUrl: './into.component.html',
  styleUrls: ['./into.component.css']
})
export class IntoComponent {
  constructor(private translate: TranslateService) {
  }

}
