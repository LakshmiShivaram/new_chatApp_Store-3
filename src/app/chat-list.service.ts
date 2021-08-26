import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChatData } from './chat-data';

@Injectable({ providedIn: 'root' })
export class ChatList {
  chatUrl =
    'https://raw.githubusercontent.com/NablaT/test-api/master/assets/messages.json.txt';

  constructor(private http: HttpClient) {}

  getChatList(): Observable<ChatData[]> {
    return this.http.get<ChatData[]>(this.chatUrl).pipe(map(res => res));
  }

  getParticularChatDetails(id: number): Observable<ChatData[]> {
    return this.http.get<ChatData[]>(this.chatUrl);
  }
}
