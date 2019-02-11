import { WorkerTask } from "./tasks/WorkerTask";
import { HarvestTask } from "./tasks/HarvestTask";
import { UpgradeTask } from "./tasks/UpgradeTask";
import { RefillEngTask } from "./tasks/RefillEngTask";

// Class that should see ALL tasks that need done, and delegate workers to them
export class Delegator {
    public static delegate() {
        for (let key in Game.creeps) {
            let creep = Game.creeps[key];            
            // Switch based on task set, if no task find one.
            switch (creep.memory.currTask) {
                case "HRV":
                    console.log("Running HRV task for " + creep.name);
                    HarvestTask.run(creep)    
                    break;
                case "UPG":
                    UpgradeTask.run(creep)    
                    break;
                case "WRK":
                    WorkerTask.run(creep)    
                    break;
                case "HUA":
                    // WorkerTask.run(creep)    
                    break;
                case "RFL":
                    RefillEngTask.run(creep)    
                    break;
                default:
                    console.log("DELEGATOR: Invalid Task, Attempting to find task for [" + creep.name + "] ");
                    break;
            }
        }
    }
}