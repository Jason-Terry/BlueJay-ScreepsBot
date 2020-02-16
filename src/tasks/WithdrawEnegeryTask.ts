export class WithdrawEnergyTask {
    public static run(creep: Creep) {

        let cargoTotal = _.sum(creep.carry);
        // console.log(creep.name + " | Capacity: " + cargoTotal + " OF " + creep.carryCapacity); 
        // console.log(creep.name + " | Task Set To " + creep.memory.prevTask);      
        
        // If full, get back to work
        if (cargoTotal == creep.carryCapacity) {
            console.log(creep.name + " FULL!"); 
            console.log(creep.name + " | Task Set To " + creep.memory.prevTask);          
            creep.memory.currTask = creep.memory.prevTask;
            creep.memory.prevTask = "NUL";
        } else {
            // Fill er up
            let targets = creep.room.find(FIND_STRUCTURES, {
                filter: function(s: AnyStructure): boolean {
                  return s.structureType == STRUCTURE_CONTAINER ||
                    s.structureType == STRUCTURE_EXTENSION || 
                    s.structureType == STRUCTURE_SPAWN;
                }
            });
            if (creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
    }
}