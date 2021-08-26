import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { chatActionState, MyAppState } from '../app.state';
import { ChatData } from '../chat-data';
import { ChatList } from '../chat.service';
import { addChatOnSave } from '../store/chat_store.action';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {
  public messageForm: FormGroup;
  public selectedChatData: ChatData;
  public id: number;

  /* taken from store */
  chatForDisplay: string[] = [];

  constructor(
    private fb: FormBuilder,
    private chatService: ChatList,
    private routeActivated: ActivatedRoute,
    private route: Router,
    private store: Store<MyAppState>
  ) {}

  ngOnInit() {
    this.id = this.routeActivated.snapshot.params['id'];

    this.chatService.getParticularChatDetails(this.id).subscribe(res => {
      this.selectedChatData = res.find(item => item.id === this.id);
    });

    this.messageForm = this.fb.group({
      message: ['']
    });

    this.store
      .pipe(
        select('messages'),
        map(state => {
          Object.keys(state).filter(key => {
            if (state[key].chatId == this.id)
              this.chatForDisplay = [...state[key].message];
          });
        })
      )
      .subscribe();
  }

  saveMessage() {
    this.chatForDisplay = Object.assign([], this.chatForDisplay);
    let messageData = [];
    this.chatForDisplay.push(this.messageForm.value.message);
    messageData.push({
      chatId: this.id,
      message: this.chatForDisplay
    });

    this.store.dispatch(addChatOnSave({ messageData }));
    this.messageForm.reset();
  }

  goBack() {
    this.route.navigate(['/contacts']);
  }
}
