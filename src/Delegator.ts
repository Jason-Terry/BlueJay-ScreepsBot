import { WorkerTask } from "./tasks/WorkerTask";
import { HarvestTask } from "./tasks/HarvestTask";
import { UpgradeTask } from "./tasks/UpgradeTask";
import { LoadEnergyTask } from "./tasks/LoadEnegeryTask";

// Class that should see ALL tasks that need done, and delegate workers to them
export class Delegator {
    public static delegate() {
        for (let key in Game.creeps) {
            let creep = Game.creeps[key];            
            // Switch based on task set, if no task find one.
            switch (creep.memory.currTask) {
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
                case "RFL": 
                    LoadEnergyTask.run(creep)    
                    break;
                default:
                    console.info("DELEGATOR: Invalid Task, Attempting to find task for [" + creep.name + "] ");
                    creep.memory.currTask = creep.memory.role;
                    break;
            }
        }
    }
}