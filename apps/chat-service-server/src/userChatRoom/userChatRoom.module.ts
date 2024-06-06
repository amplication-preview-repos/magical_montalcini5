import { Module } from "@nestjs/common";
import { UserChatRoomModuleBase } from "./base/userChatRoom.module.base";
import { UserChatRoomService } from "./userChatRoom.service";
import { UserChatRoomController } from "./userChatRoom.controller";
import { UserChatRoomResolver } from "./userChatRoom.resolver";

@Module({
  imports: [UserChatRoomModuleBase],
  controllers: [UserChatRoomController],
  providers: [UserChatRoomService, UserChatRoomResolver],
  exports: [UserChatRoomService],
})
export class UserChatRoomModule {}
