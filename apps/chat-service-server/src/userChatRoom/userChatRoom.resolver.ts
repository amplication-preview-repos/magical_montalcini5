import * as graphql from "@nestjs/graphql";
import { UserChatRoomResolverBase } from "./base/userChatRoom.resolver.base";
import { UserChatRoom } from "./base/UserChatRoom";
import { UserChatRoomService } from "./userChatRoom.service";

@graphql.Resolver(() => UserChatRoom)
export class UserChatRoomResolver extends UserChatRoomResolverBase {
  constructor(protected readonly service: UserChatRoomService) {
    super(service);
  }
}
