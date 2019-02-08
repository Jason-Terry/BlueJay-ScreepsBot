export class RefillEngTask {
    public static run(creep: Creep) {

        let cargoTotal = _.sum(creep.carry);
        creep.room.storage

        // If full, get back to work
        if (cargoTotal == creep.carryCapacity) {            
            creep.memory.currTask = creep.memory.prevTask;
            creep.memory.prevTask = "NUL";
        } else {
            // Fill er up
            let targets = creep.room.find(FIND_MY_STRUCTURES);
            JSON.stringify(targets);
            if (creep.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
    }
}