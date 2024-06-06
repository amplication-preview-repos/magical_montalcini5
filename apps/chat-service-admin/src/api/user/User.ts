import { Message } from "../message/Message";
import { JsonValue } from "type-fest";
import { UserChatRoom } from "../userChatRoom/UserChatRoom";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  roles: JsonValue;
  updatedAt: Date;
  userChatRooms?: Array<UserChatRoom>;
  username: string;
};
