export class UpgradeTask {
    public static run(creep: Creep) {
        let cargoTotal = _.sum(creep.carry);
        if (cargoTotal <= 0) {
            // lets get some energy
            creep.memory.prevTask = creep.memory.currTask;
            creep.memory.currTask = "WIT";
        }
        else {
            // If we have energy on board
            if (creep.room.controller) {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
    }
}
