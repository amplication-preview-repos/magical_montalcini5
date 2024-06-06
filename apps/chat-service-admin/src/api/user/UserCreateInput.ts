import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserChatRoomCreateNestedManyWithoutUsersInput } from "./UserChatRoomCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  userChatRooms?: UserChatRoomCreateNestedManyWithoutUsersInput;
  username: string;
};
