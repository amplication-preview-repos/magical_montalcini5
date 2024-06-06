import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";
import { UserChatRoomUpdateManyWithoutChatRoomsInput } from "./UserChatRoomUpdateManyWithoutChatRoomsInput";

export type ChatRoomUpdateInput = {
  description?: string | null;
  messages?: MessageUpdateManyWithoutChatRoomsInput;
  roomName?: string | null;
  userChatRooms?: UserChatRoomUpdateManyWithoutChatRoomsInput;
};
