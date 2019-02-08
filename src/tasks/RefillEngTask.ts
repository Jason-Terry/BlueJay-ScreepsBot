export class RefillEngTask {
    public static run(creep: Creep) {

        let cargoTotal = _.sum(creep.carry);

        // If full, get back to work
        if (cargoTotal == creep.carryCapacity) {
            // TRC log
            console.log(creep.name + " | Capacity: " + cargoTotal + " OF " + creep.carryCapacity); 
            console.log(creep.name + " | Task Set To " + creep.memory.prevTask);          
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