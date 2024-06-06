import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { UserChatRoomListRelationFilter } from "../userChatRoom/UserChatRoomListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  messages?: MessageListRelationFilter;
  userChatRooms?: UserChatRoomListRelationFilter;
  username?: StringFilter;
};
