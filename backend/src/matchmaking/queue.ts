import { Player } from "../types/types";

const queue: Player[] = [];

export function addToQueue(player: Player) {
  queue.push(player);
}

export function removeFromQueue(socketId: string) {
  const index = queue.findIndex((p) => p.socket.id === socketId);
  if (index !== -1) queue.splice(index, 1);
}

export function getQueue(): Player[] {
  return queue;
}
