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
                    console.log("Running HRV task for " + creep.name);
                    HarvestTask.run(creep)    
                    break;
                case "UPG":
                    console.log("Running UPG task for " + creep.name);
                    UpgradeTask.run(creep)    
                    break;
                case "WRK":
                    console.log("Running WRK task for " + creep.name);
                    WorkerTask.run(creep)    
                    break;
                case "HUA":
                    // WorkerTask.run(creep)    
                    break;
                case "RFL":
                    console.log("Running RFL task for " + creep.name);  
                    LoadEnergyTask.run(creep)    
                    break;
                default:
                    console.log("DELEGATOR: Invalid Task, Attempting to find task for [" + creep.name + "] ");
                    break;
            }
        }
    }
}