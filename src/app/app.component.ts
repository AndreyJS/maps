import { Component } from '@angular/core';
import { MessageServiceService } from './export-core/MessageService/message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private MessageServiceService: MessageServiceService) {}
}
