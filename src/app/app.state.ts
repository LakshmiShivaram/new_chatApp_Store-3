import { ChatData } from './chat-data';

/* For particular chats */
export interface chatActionState {
  chatId: number;
  message: string[];
}

/* For all chats */
export interface MyAppState {
  contacts: ChatData[];
  messages: chatActionState[];
}
