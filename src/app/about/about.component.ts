import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private http: HttpClient, private translate: TranslateService) {
  }
  downloadResume() {
    const currentLang = this.translate.currentLang;
    let filePath = 'assets/pdf/resume-mekni.pdf'; // default to English

    if (currentLang === 'fr') {
      filePath = 'assets/pdf/cv-iheb.pdf';
    } else if (currentLang === 'de') {
      filePath = 'assets/pdf/Lebenslauf-iheb-mekni.pdf';
    }

    this.http.get(filePath, { responseType: 'blob' }).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank');
    }, error => {
      console.error('Error downloading the file', error);
    });
  }
}
