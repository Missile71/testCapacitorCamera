import { Component } from '@angular/core';
import { Camera, CameraResultType, GalleryPhotos } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image: GalleryPhotos

  constructor() { }

  async foto() {
    try {
      this.image = await Camera.pickImages({
        quality: 90,
        correctOrientation: true
      });

      
    } catch (error) {
      alert(error.message);
    }


  }
}
