import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../MessageService/message-service.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private MessageServiceService: MessageServiceService) { }

  ngOnInit() {
  }

}
