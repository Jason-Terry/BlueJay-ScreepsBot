import { ErrorMapper } from "utils/ErrorMapper";
import { Commander } from "./Commander";
// import { RoomMapper } from "utils/RoomMapper";
import { Logger } from "utils/Logger";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
let dbClient: any;

export const loop = ErrorMapper.wrapLoop(() => {
  // TICK SETUP

  // SETUP LOGS
  Logger.log('||||||| BLUE JAY SCREEPS DASHBOARD V1 ~~~~~~~ By Jason Terry');
  Commander.runTick();
  
  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
});
