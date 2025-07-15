import { Socket } from "socket.io";

export interface Example {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
}

export interface TestCase {
  input: string;
  output: string;
}

export interface StarterCode {
  languageId: number;
  starterCode: string;
}

export interface Problem {
  id: string;
  title: string;
  problemStatement: string;
  examples: Example[];
  testCases: TestCase[];
  constraints: string;
  starterCode: StarterCode[];
  starterFunctionName: string;
}

export interface UserData {
  uid: string;
  username: string;
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
