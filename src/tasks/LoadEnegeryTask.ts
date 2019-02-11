export class LoadEnergyTask {
    public static run(creep: Creep) {

        let cargoTotal = _.sum(creep.carry);
        console.log(creep.name + " | Capacity: " + cargoTotal + " OF " + creep.carryCapacity); 
        console.log(creep.name + " | Task Set To " + creep.memory.prevTask);      
        // If full, get back to work
        if (cargoTotal == creep.carryCapacity) {
            // TRC log
            console.log(creep.name + " FULL!"); 
            console.log(creep.name + " | Task Set To " + creep.memory.prevTask);          
            creep.memory.currTask = creep.memory.prevTask;
            creep.memory.prevTask = "NUL";
        } else {
            // Fill er up
            let targets = creep.room.find(FIND_STRUCTURES);

            /*
            
            STRUCTURE_SPAWN
            STRUCTURE_CONTAINER
            STRUCTURE_EXTENSION
            STRUCTURE_STORAGE
            
            */

            JSON.stringify(targets);
            console.log(targets);
            // find storage -> container -> spawn
            // store them in object.
            let storage;
            for (const target of targets) {
                if (target.structureType == STRUCTURE_SPAWN) {
                    // found spawn
                }
            }


            if (creep.withdraw(targets[1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[1]);
            }
        }
    }
}