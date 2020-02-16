import { spawn } from "child_process";

// Class that contains creep logic for Harvesting energy from source.
export class HarvestTask {
    public static run(creep: Creep) {

        // Task Setup
        let sources = creep.room.find(FIND_SOURCES);
        let cargoTotal = _.sum(creep.carry);

        // If we have room to carry
        // console.log(creep.name + " is carrying " + cargoTotal + " of " + creep.carryCapacity);
        if (cargoTotal == creep.carryCapacity) {
            // Let's drop off
            console.log(creep.name + " FULL!"); 
            console.log(creep.name + " | Task Set To " + "TRA");          
            
            creep.memory.prevTask = creep.memory.currTask;
            creep.memory.currTask = "TRA";
        } else {
            // Mine some energy
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                // console.log("Moving...")
                creep.moveTo(sources[0])
            }
        }
    }
}