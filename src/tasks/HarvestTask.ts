import { Logger } from 'utils/Logger';
import { Task } from './Task';

// Class that contains creep logic for Harvesting energy from source.
export class HarvestTask extends Task {
    public static run(creep: Creep) {

        // Task Setup
        let sources = creep.room.find(FIND_SOURCES);
        let cargoTotal = _.sum(creep.carry);

        // If we have room to carry
        // Logger.log(creep.name + " is carrying " + cargoTotal + " of " + creep.carryCapacity);
        if (cargoTotal == creep.carryCapacity) {
            // Let's drop off
            creep.say("ENG Full! More than 10!!!!");  
            this.setTask(creep, "TRA");    
        } else {
            // Mine some energy
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.say("Moving!");                
                creep.moveTo(sources[0]);
            }
        }
    }
}