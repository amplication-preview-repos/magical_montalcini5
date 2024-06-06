import { ChatRoom as TChatRoom } from "../api/chatRoom/ChatRoom";

export const CHATROOM_TITLE_FIELD = "roomName";

export const ChatRoomTitle = (record: TChatRoom): string => {
  return record.roomName?.toString() || String(record.id);
};
