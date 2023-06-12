import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

    user_name: any;
    arr=[1,2,3,4,5];
    name = "Sai Kayal"
    user="kayalvizhi Dhavakumaran";
    imageChangedEvent:any='';
    textShow: boolean = true;
    croppedImage: any;
    // image=
    // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-ywpkj&psig=AOvVaw0LOvAA6HiDK-J2mSrOXqa_&ust=1683366056649000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICi07Dx3f4CFQAAAAAdAAAAABAE"
    constructor(private router:Router){
  
    }
    ngOnInit(): void {
      this.greetings();
      this.notbuiltinPalin('madam');
  
    }
    greetings() {
      let time = new Date().getHours();
      if (time < 12) {
        return 'Good Morning'
      }
      else if (time < 17) {
        return 'Good Afternoon'
      }
      else if(time< 21) {
        return 'Good Evening'
      }
      else {
        return 'Hope you have a nice day'
      }
    }
    textChange() {
      this.user_name = `Welcome ${this.name}  `;
      this.textShow=!this.textShow;
    }
    skills(){
      this.router.navigate(['/skills'])
    }
   
    fileChangeEvent(event:any){
      console.log(event,"event");
      this.imageChangedEvent=event;
      
    }
    imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded(image: LoadedImage) {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
  notbuiltinPalin(str:any){
    let len=str.length-1;
    let rev_str='';
    for(let i=len;i>=0;i--){
      console.log(str[i])
      rev_str+=str[i];
      console.log(rev_str)
    
    
    }
    if(rev_str===str){
      console.log("pali")
    }
    else{
     console.log("not palin")
    }
    
    }
    resume(){
      this.router.navigate(['/resume']);
    }
    todo(){
      this.router.navigate(['/todo'])
    }
  
  }
  