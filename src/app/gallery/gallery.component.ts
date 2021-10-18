import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 public images :any;
  constructor( private userService : UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllimages().subscribe((data:any) => {
         this.images= data.images
    });
  }

}
