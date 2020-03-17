import { Task } from "./Task";

export class WorkTask extends Task {
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
            } else {
                // task chain
            }
        } else {
            this.setTask(creep, "WIT");
            creep.memory.prevTask = creep.memory.currTask;
        }
    }
}
