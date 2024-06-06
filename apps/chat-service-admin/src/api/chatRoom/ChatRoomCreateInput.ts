import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";
import { UserChatRoomCreateNestedManyWithoutChatRoomsInput } from "./UserChatRoomCreateNestedManyWithoutChatRoomsInput";

export type ChatRoomCreateInput = {
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
  roomName?: string | null;
  userChatRooms?: UserChatRoomCreateNestedManyWithoutChatRoomsInput;
};
