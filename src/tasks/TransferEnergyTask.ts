import { Task } from "./Task";
import { Logger } from "utils/Logger";

export class TransferEnergyTask extends Task {
    public static run(creep: Creep) {

        let cargoTotal = _.sum(creep.carry);
        // Logger.log(creep.name + " | Capacity: " + cargoTotal + " OF " + creep.carryCapacity); 
        // Logger.log(creep.name + " | Task Set To " + creep.memory.prevTask);      
        
        // If empty, get back to work
        if (cargoTotal == 0) {
            Logger.log(creep.name + " EMPTY!"); 
            Logger.log(creep.name + " | Task Set To " + creep.memory.prevTask);          
            this.prevTask(creep);
        } else {
            // Drop er off
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: function(s: AnyStructure): boolean {
                  return s.structureType == STRUCTURE_CONTAINER ||
                    s.structureType == STRUCTURE_EXTENSION || 
                    s.structureType == STRUCTURE_SPAWN;
                }
            });
            if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
    }
}