export interface ChatData {
  id: number;
  sender: SenderData;
  content: string;
  read: boolean;
  date: string;
}

interface SenderData {
  name: string;
  profileImage: string;
}
