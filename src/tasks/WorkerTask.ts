export class WorkerTask {
    public static run(creep: Creep) {
        // Task Setup
        let cargoTotal = _.sum(creep.carry);
        // If we have room to carry
        if (cargoTotal > 0) {
            let target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (target) {
                if (creep.build(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        } else {
            creep.memory.currTask = "RFL";
        }
    }
}
