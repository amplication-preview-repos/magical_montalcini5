import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserChatRoomUpdateManyWithoutUsersInput } from "./UserChatRoomUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  userChatRooms?: UserChatRoomUpdateManyWithoutUsersInput;
  username?: string;
};
