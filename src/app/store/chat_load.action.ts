import { createAction, props } from '@ngrx/store';
import { ChatData } from '../chat-data';

export const addChatOnLoad = createAction(
  '[Chat Component]  LOAD CONTACTS',
  props<{ contacts: ChatData[] }>()
);
