// Class that contains creep logic for Harvesting energy from source.
export class HarvestTask {
    public static run(creep: Creep) {
        // Task Setup
        let sources = creep.room.find(FIND_SOURCES);
        let cargoTotal = _.sum(creep.carry);
        // If we have room to carry
        if (creep.carryCapacity > cargoTotal) {
            // Mine source
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0])
            }
        }
    }
}