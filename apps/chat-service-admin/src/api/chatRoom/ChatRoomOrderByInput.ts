import { SortOrder } from "../../util/SortOrder";

export type ChatRoomOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  roomName?: SortOrder;
  updatedAt?: SortOrder;
};
