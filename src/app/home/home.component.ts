import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import 'quill-mention';
import { UserData } from '../interface';
import { UserService } from '../user-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  atValues: any = [];

  quillConfig = {
    toolbar: false,
    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ['@'],
      source: (
        searchTerm: string,
        renderList: (arg0: { id: number; value: string }[], arg1: any) => void,
        mentionChar: string
      ) => {
        let values;
        if (mentionChar === '@') {
          values = this.atValues;
          if (searchTerm.length === 0) {
            renderList(values, searchTerm);
          } else {
            const matches = [];
            for (var i = 0; i < values.length; i++)
              if (
                ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
              )
                matches.push(values[i]);
            renderList(matches, searchTerm);
          }
        }
      },
    },
    keyboard: {
      bindings: {
        enter: {
          key: 13,
          handler: (range: any, context: any) => {
            console.log('enter');
            return true;
          },
        },
      },
    },
  };

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.atValues = data.mention;
    });
  }
}
