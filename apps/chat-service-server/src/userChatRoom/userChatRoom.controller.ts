import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserChatRoomService } from "./userChatRoom.service";
import { UserChatRoomControllerBase } from "./base/userChatRoom.controller.base";

@swagger.ApiTags("userChatRooms")
@common.Controller("userChatRooms")
export class UserChatRoomController extends UserChatRoomControllerBase {
  constructor(protected readonly service: UserChatRoomService) {
    super(service);
  }
}
