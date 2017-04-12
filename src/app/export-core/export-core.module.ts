import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { MessageServiceService } from './MessageService/message-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HelloComponent],
  exports: [HelloComponent],
  providers: [MessageServiceService]
})
export class ExportCoreModule { }
