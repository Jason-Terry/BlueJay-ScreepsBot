import { WorkerTask } from "./WorkerTask";
import { HarvestTask } from "./HarvestTask";
import { UpgradeTask } from "./UpgradeTask";

// Class that should see ALL tasks that need done, and delegate workers to them
export class Delegator {
    public static delegate() {
        for (let key in Game.creeps) {
            let creep = Game.creeps[key];            
            // Switch based on task set, if no task find one.
            switch (creep.memory.task) {
                case "HRV":
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
                default:
                    console.log("DELEGATOR: Invalid Task, Attempting to find task for [" + creep.name + "] ");
                    break;
            }
        }
    }
}