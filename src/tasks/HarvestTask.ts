import { spawn } from "child_process";

// Class that contains creep logic for Harvesting energy from source.
export class HarvestTask {
    public static run(creep: Creep) {
        
        // Task Setup
        let sources = creep.room.find(FIND_SOURCES);
        let cargoTotal = _.sum(creep.carry);

        // If we have room to carry
        // console.log(creep.name + " is carrying " + cargoTotal + " of " + creep.carryCapacity);
        
        if (creep.carryCapacity > cargoTotal) {
            
            // Mine source
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                // console.log("Moving...")
                creep.moveTo(sources[0])
            }

        } else {
            
            // Unload Source
            if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }

        }
    }
}