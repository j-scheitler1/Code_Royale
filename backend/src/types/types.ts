import { Socket } from "socket.io";
import type { Problem } from "@coderoyale/shared-types/src";

export interface UserData {
  uid: string;
  email: string;
}

export interface Player {
  socket: Socket;
  userData: UserData;
}

export interface Match {
  players: UserData[];
  sockets: Socket[];
  problem: Problem;
  timer: number;
}
