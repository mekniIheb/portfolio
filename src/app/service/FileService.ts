import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  saveJSON(data: any, filename: string) {
    const jsonBlob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    saveAs(jsonBlob, filename);
  }
}
