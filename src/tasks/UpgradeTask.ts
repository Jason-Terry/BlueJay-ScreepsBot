export class UpgradeTask {
    public static run(creep: Creep) {
        let cargoTotal = _.sum(creep.carry);
        // If we have room to carry
        if (cargoTotal > 0) {
            if(creep.room.controller) {
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        } else {
            creep.memory.currTask = "RFL";
        }        
    }
}