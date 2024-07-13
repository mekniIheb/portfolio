import { Component } from '@angular/core';
import {Lightbox} from "ngx-lightbox";



@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  private _albums: Array<any> = [];
  private _albumsFLyCar: Array<any> = [];
  private _albumsSteg: Array<any> = [];
  private _albumsPortfolio: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    this._albums = [
      {
        src: 'assets/img/harmony-psych/1.png',
        caption: 'Image 1',
        thumb: 'assets/img/harmony-psych/1.png'
      },
      {
        src: 'assets/img/harmony-psych/2.png',
        caption: 'Image 2',
        thumb: 'assets/img/harmony-psych/2.png'
      },
      {
        src: 'assets/img/harmony-psych/3.png',
        caption: 'Image 3',
        thumb: 'assets/img/harmony-psych/3.png'
      },
      {
        src: 'assets/img/harmony-psych/4.png',
        caption: 'Image 4',
        thumb: 'assets/img/harmony-psych/4.png'
      },
      {
        src: 'assets/img/harmony-psych/5.png',
        caption: 'Image 5',
        thumb: 'assets/img/harmony-psych/5.png'
      },
      {
        src: 'assets/img/harmony-psych/6.png',
        caption: 'Image 6',
        thumb: 'assets/img/harmony-psych/6.png'
      },
      {
        src: 'assets/img/harmony-psych/7.png',
        caption: 'Image 7',
        thumb: 'assets/img/harmony-psych/7.png'
      },
      {
        src: 'assets/img/harmony-psych/8.png',
        caption: 'Image 8',
        thumb: 'assets/img/harmony-psych/8.png'
      },
      {
        src: 'assets/img/harmony-psych/9.png',
        caption: 'Image 9',
        thumb: 'assets/img/harmony-psych/9.png'
      },
      {
        src: 'assets/img/harmony-psych/10.png',
        caption: 'Image 10',
        thumb: 'assets/img/harmony-psych/10.png'
      },
      {
        src: 'assets/img/harmony-psych/11.png',
        caption: 'Image 11',
        thumb: 'assets/img/harmony-psych/11.png'
      },
      {
        src: 'assets/img/harmony-psych/12.png',
        caption: 'Image 12',
        thumb: 'assets/img/harmony-psych/12.png'
      }
    ];
    this._albumsFLyCar = [
      {
        src: 'assets/img/fly-car/1.png',
        caption: 'Image 1',
        thumb: 'assets/img/fly-car/1.png'
      },
      {
        src: 'assets/img/fly-car/2.png',
        caption: 'Image 2',
        thumb: 'assets/img/fly-car/2.png'
      },
      {
        src: 'assets/img/fly-car/3.png',
        caption: 'Image 3',
        thumb: 'assets/img/fly-car/3.png'
      },
      {
        src: 'assets/img/fly-car/4.png',
        caption: 'Image 4',
        thumb: 'assets/img/fly-car/4.png'
      },
      {
        src: 'assets/img/fly-car/5.png',
        caption: 'Image 5',
        thumb: 'assets/img/fly-car/5.png'
      },
      {
        src: 'assets/img/fly-car/6.png',
        caption: 'Image 6',
        thumb: 'assets/img/fly-car/6.png'
      },
      {
        src: 'assets/img/fly-car/7.png',
        caption: 'Image 7',
        thumb: 'assets/img/fly-car/7.png'
      },
      {
        src: 'assets/img/fly-car/8.png',
        caption: 'Image 8',
        thumb: 'assets/img/fly-car/8.png'
      }
    ];
    this._albumsSteg = [
      {
        src: 'assets/img/steg/1.png',
        caption: 'Image 1',
        thumb: 'assets/img/steg/1.png'
      },
      {
        src: 'assets/img/steg/2.png',
        caption: 'Image 2',
        thumb: 'assets/img/steg/2.png'
      },
      {
        src: 'assets/img/steg/3.png',
        caption: 'Image 3',
        thumb: 'assets/img/steg/3.png'
      },
      {
        src: 'assets/img/steg/4.png',
        caption: 'Image 4',
        thumb: 'assets/img/steg/4.png'
      },
      {
        src: 'assets/img/steg/5.png',
        caption: 'Image 5',
        thumb: 'assets/img/steg/5.png'
      },
      {
        src: 'assets/img/steg/6.png',
        caption: 'Image 6',
        thumb: 'assets/img/steg/6.png'
      },
      {
        src: 'assets/img/steg/7.png',
        caption: 'Image 7',
        thumb: 'assets/img/steg/7.png'
      },
      {
        src: 'assets/img/steg/8.png',
        caption: 'Image 8',
        thumb: 'assets/img/steg/8.png'
      },
      {
        src: 'assets/img/steg/9.png',
        caption: 'Image 8',
        thumb: 'assets/img/steg/9.png'
      },
      {
        src: 'assets/img/steg/10.png',
        caption: 'Image 8',
        thumb: 'assets/img/steg/10.png'
      }
    ];
    this._albumsPortfolio = [
      {
        src: 'assets/img/portfolio/1.png',
        caption: 'Image 1',
        thumb: 'assets/img/portfolio/1.png'
      }
    ];
  }

  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }
  openFlyCar(index: number): void {
    this._lightbox.open(this._albumsFLyCar, index);
  }
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  openSteg(index: number): void {
    this._lightbox.open(this._albumsSteg, index);
  }
  openDialog(index: number): void {
    this._lightbox.open(this._albumsPortfolio, index);
  }
}
