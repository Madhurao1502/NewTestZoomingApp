import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('modalContent', { static: false }) modalContent!: ElementRef;
  @ViewChild('image', { static: false }) image!: ElementRef;

  
  constructor() {
    this.selectedPhoto = this.photos[0]; // Select the first photo on load
  }

  selectPhoto(photo: any) {
    this.selectedPhoto = photo;
  }

  photos = [
    { url: 'https://cdn.pixabay.com/photo/2023/05/04/14/22/mountain-7970232_640.jpg', scale: 1, rotation: 0, offsetX: 0, offsetY: 0 },
    { url: 'https://cdn.pixabay.com/photo/2023/05/19/04/22/beach-8003636_640.jpg', scale: 1, rotation: 0, offsetX: 0, offsetY: 0 },
    { url: 'https://cdn.pixabay.com/photo/2023/05/08/14/44/mountain-7978816_640.jpg', scale: 1, rotation: 0, offsetX: 0, offsetY: 0 }
    // Add more photo objects as needed
  ];

 
  selectedPhoto: any = null;
  isDragging = false;
  dragStartX = 0;
  dragStartY = 0;
  imageOffsetX = 0;
  imageOffsetY = 0;

  
   openModal(photo: any) {
     this.selectedPhoto = photo;
     this.imageOffsetX = this.selectedPhoto.offsetX;
     this.imageOffsetY = this.selectedPhoto.offsetY;
   }



  // onImageMouseMove(event: MouseEvent) {
  //   if (this.isDragging) {
  //     const offsetX = event.clientX - this.dragStartX;
  //     const offsetY = event.clientY - this.dragStartY;
  //     this.imageOffsetX = offsetX;
  //     this.imageOffsetY = offsetY;

  //   }
  // }

  // onImageMouseMove(event: MouseEvent) {
  //   if (this.isDragging) {
  //     const offsetX = event.clientX - this.dragStartX;
  //     const offsetY = event.clientY - this.dragStartY;
  
  //     const newX = this.selectedPhoto.offsetX + offsetX;
  //     const newY = this.selectedPhoto.offsetY + offsetY;
  
  //     this.selectedPhoto.offsetX = newX;
  //     this.selectedPhoto.offsetY = newY;
  
  //     this.dragStartX = event.clientX;
  //     this.dragStartY = event.clientY;
  //   }
  // }

  // onImageMouseMove(event: MouseEvent) {
  //   if (this.isDragging) {
  //     const offsetX = event.clientX - this.dragStartX;
  //     const offsetY = event.clientY - this.dragStartY;
      
  //     const imageRect = this.image.nativeElement.getBoundingClientRect();
  //     const modalContentRect = this.modalContent.nativeElement.getBoundingClientRect();
      
  //     const minX = modalContentRect.left - imageRect.left;
  //     const minY = modalContentRect.top - imageRect.top;
  //     const maxX = modalContentRect.right - imageRect.right;
  //     const maxY = modalContentRect.bottom - imageRect.bottom;
      
  //     const newOffsetX = Math.max(Math.min(this.selectedPhoto.offsetX + offsetX, maxX), minX);
  //     const newOffsetY = Math.max(Math.min(this.selectedPhoto.offsetY + offsetY, maxY), minY);
      
  //     this.selectedPhoto.offsetX = newOffsetX;
  //     this.selectedPhoto.offsetY = newOffsetY;
      
  //     this.dragStartX = event.clientX;
  //     this.dragStartY = event.clientY;
  //   }
  // }
  // onImageMouseMove(event: MouseEvent) {
  //   if (this.isDragging) {
  //     const offsetX = event.clientX - this.dragStartX;
  //     const offsetY = event.clientY - this.dragStartY;
      
  //     const modalContentRect = this.modalContent.nativeElement.getBoundingClientRect();
  //     const imageRect = this.image.nativeElement.getBoundingClientRect();
      
  //     const minX = modalContentRect.left - imageRect.left;
  //     const minY = modalContentRect.top - imageRect.top;
  //     const maxX = modalContentRect.right - imageRect.right;
  //     const maxY = modalContentRect.bottom - imageRect.bottom;
      
  //     this.imageOffsetX = Math.max(Math.min(offsetX, maxX), minX);
  //     this.imageOffsetY = Math.max(Math.min(offsetY, maxY), minY);
      
  //     // Prevent text selection while dragging
  //     event.preventDefault();
  //   }
  // }


  // onImageMouseMove(event: MouseEvent) {
  //   if (this.isDragging) {
  //     const offsetX = event.clientX - this.dragStartX;
  //     const offsetY = event.clientY - this.dragStartY;
  
  //     const modalContentRect = this.modalContent.nativeElement.getBoundingClientRect();
  //     const imageRect = this.image.nativeElement.getBoundingClientRect();
  
  //     const minX = modalContentRect.left - imageRect.left;
  //     const minY = modalContentRect.top - imageRect.top;
  //     const maxX = modalContentRect.right - imageRect.right;
  //     const maxY = modalContentRect.bottom - imageRect.bottom;
  
  //     const newOffsetX = Math.max(Math.min(this.selectedPhoto.offsetX + offsetX, maxX), minX);
  //     const newOffsetY = Math.max(Math.min(this.selectedPhoto.offsetY + offsetY, maxY), minY);
  
  //     this.selectedPhoto.offsetX = newOffsetX;
  //     this.selectedPhoto.offsetY = newOffsetY;
  
  //     this.dragStartX = event.clientX;
  //     this.dragStartY = event.clientY;
  //   }
  // }
  
  // onImageMouseUp(event: MouseEvent) {
  //   this.isDragging = false;
  
    // const imageRect = this.image.nativeElement.getBoundingClientRect();
    // const modalContentRect = this.modalContent.nativeElement.getBoundingClientRect();
  
    // const minX = modalContentRect.left - imageRect.left;
    // const minY = modalContentRect.top - imageRect.top;
    // const maxX = modalContentRect.right - imageRect.right;
    // const maxY = modalContentRect.bottom - imageRect.bottom;
  
    // const newOffsetX = Math.max(Math.min(this.selectedPhoto.offsetX, maxX), minX);
    // const newOffsetY = Math.max(Math.min(this.selectedPhoto.offsetY, maxY), minY);
  
    // this.selectedPhoto.offsetX = newOffsetX;
    // this.selectedPhoto.offsetY = newOffsetY;
  // }

  onImageMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.dragStartX = event.clientX - this.imageOffsetX;
    this.dragStartY = event.clientY - this.imageOffsetY;
    event.stopPropagation();
    event.preventDefault();
  }
  

  onImageMouseUp() {
    this.isDragging = false;
    this.selectedPhoto.offsetX = this.imageOffsetX;
    this.selectedPhoto.offsetY = this.imageOffsetY;
  // event.stopPropagation();
    // event.preventDefault();
  }

  zoomIn(photo: any) {
    photo.scale += 0.1;
  }

  zoomOut(photo: any) {
    if (photo.scale > 0.1) {
      photo.scale -= 0.1;
    }
  }

  rotateLeft(photo: any) {
    photo.rotation -= 90;
  }

  rotateRight(photo: any) {
    photo.rotation += 90;
  }

  // resetImage(photo: any) {
  //   photo.scale = 1;
  //   photo.rotation = 0;
  //   photo.offsetX = 0;
  //   photo.offsetY = 0;
  //   this.imageOffsetX = 0; // Reset image offset X
  //   this.imageOffsetY = 0; // Reset image offset Y
  //   this.dragStartX = 0; // Reset drag start X position
  //   this.dragStartY = 0; // Reset drag start Y position
  // }

  resetImage(photo: any) {
    photo.scale = 1;
    photo.rotation = 0;
    photo.offsetX = 0;
    photo.offsetY = 0;
    this.selectedPhoto = photo; // Update the selectedPhoto reference
    this.isDragging = false; // Reset the dragging state
  }


  onImageMouseMove(event: MouseEvent) {
    if (this.isDragging && this.selectedPhoto) {
      const offsetX = event.clientX - this.dragStartX;
      const offsetY = event.clientY - this.dragStartY;
  
      const newOffsetX = this.selectedPhoto.offsetX + offsetX;
      const newOffsetY = this.selectedPhoto.offsetY + offsetY;
  
      this.selectedPhoto.offsetX = newOffsetX;
      this.selectedPhoto.offsetY = newOffsetY;
  
      this.dragStartX = event.clientX;
      this.dragStartY = event.clientY;
    }
  }



  previousPhoto() {
    const currentIndex = this.photos.indexOf(this.selectedPhoto);
    if (currentIndex > 0) {
      this.selectedPhoto = this.photos[currentIndex - 1];
    }
  }

  nextPhoto() {
    const currentIndex = this.photos.indexOf(this.selectedPhoto);
    if (currentIndex < this.photos.length - 1) {
      this.selectedPhoto = this.photos[currentIndex + 1];
    }
  }

  isFirstPhoto() {
    return this.photos.indexOf(this.selectedPhoto) === 0;
  }

  isLastPhoto() {
    return this.photos.indexOf(this.selectedPhoto) === this.photos.length - 1;
  }

}