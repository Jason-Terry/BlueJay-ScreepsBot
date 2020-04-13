import { Task } from "./tasks/Task";
import { HarvestTask } from "./tasks/HarvestTask";
import { UpgradeTask } from "./tasks/UpgradeTask";
import { TransferEnergyTask } from "./tasks/TransferEnergyTask";
import { WithdrawEnergyTask } from "./tasks/WithdrawEnegeryTask";
import { BuildTask } from "tasks/BuildTask";
import { WorkTask } from "tasks/WorkTask";
import { Logger } from "utils/Logger";

// Class that should see ALL tasks that need done, and delegate workers to them
export class Delegator {

    // checks and returns a creeps role
    // protects against a invalid role being set
    private static roleCheck(creep: Creep): string {
        switch (creep.memory.role) {
            case "HAR":
                return creep.memory.role;
            case "UPG":
                return creep.memory.role;
            case "WRK":
                return creep.memory.role;
            case "BLD":
                return creep.memory.role;
            default:
                // will cause HAR role to be over-filled?
                creep.memory.role = "HAR";
                return creep.memory.role;
        }
    }

    // runs the logic scripts for each task
    public static delegate() {
        for (let key in Game.creeps) {
            let creep = Game.creeps[key];
            // Switch based on task set, if no task find one.
            switch (creep.memory.currTask) {
                case "HAR":
                    HarvestTask.run(creep)
                    break;
                case "UPG":
                    UpgradeTask.run(creep)
                    break;
                case "WIT":
                    WithdrawEnergyTask.run(creep)
                    break;
                case "TRA":
                    TransferEnergyTask.run(creep);
                    break;
                case "BLD":
                    Logger.debug("Running BLD Task");
                    BuildTask.run(creep);
                    break;
                case "WRK":
                    WorkTask.run(creep);
                    break;
                default:
                    Logger.log(`DELEGATOR: Invalid Task [${creep.memory.currTask}], Attempting to find task for [${creep.name}] `);
                    Task.initTask(creep, this.roleCheck(creep));
                    break;
            }
        }
    }
}