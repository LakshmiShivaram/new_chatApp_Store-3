import { createAction, props } from '@ngrx/store';
import { chatActionState } from '../app.state';

export const addChatOnSave = createAction(
  '[Chat Component] SAVE-CHAT',
  props<{ messageData: chatActionState[] }>()
);
