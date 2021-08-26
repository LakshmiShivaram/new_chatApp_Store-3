import { createReducer, on } from '@ngrx/store';
import { ChatData } from '../chat-data';
import { addChatOnLoad } from './chat-load.action';

const initialStateOnload: ChatData[] = [];
export const chatLoadReducer = createReducer(
  initialStateOnload,
  on(addChatOnLoad, (state: ChatData[], contacts) => {
    return {
      ...state,
      ...contacts.contacts
    };
  })
);
