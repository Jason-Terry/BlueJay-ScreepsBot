import { CreepFactory } from "creeps/CreepFactory";
import { Delegator } from "Delegator";
import { Logger } from "utils/Logger";
import { EmpireStats } from "Empire";

export class Commander {

    private intelLevel: string; // INF <-> DEB <-> TRC
    private alertLevel: number; // 0 <-> 1 <-> 2

    public setAlert(i: number) {
        if (i > 0 || i > 2) {
            Logger.warn("INVALID ALERT LEVEL!")
        } else {
            this.alertLevel = i
        }        
    }

    public setIntel(s: string) {
        switch(s) { 
            case "INF": { 
               this.intelLevel = "INF"; 
               break; 
            } 
            case "DEB": { 
                this.intelLevel = "DEB";
               break; 
            } 
            case "TRC": { 
                this.intelLevel = "TRC";
                break; 
            } 
            default: { 
                this.intelLevel = "INF";
                Logger.warn("INVALID INTEL LEVEL!");
                break; 
            } 
         } 
    }

    public static rollcall() {
        // Reset the count
        EmpireStats.CurrentPopulation.reset();

        // Get new count
        for(const i in Game.creeps) {

            let creep = Game.creeps[i];
/* TRACE LOGS
            console.log(creep.name + " is of role...");
            console.log(JSON.stringify(Memory.creeps[creep.name].currTask));
*/
            if (Memory.creeps[creep.name].role == "HAR") {
                EmpireStats.CurrentPopulation.HRV += 1;

            } else if (Memory.creeps[creep.name].role == "UPG") {
                EmpireStats.CurrentPopulation.UPG += 1;

            } else if (Memory.creeps[creep.name].role == "WRK") {
                EmpireStats.CurrentPopulation.WRK += 1;

            } else {
                // error
            }
        }

        // Is our new count, not the same as our current.
        // INFO log
        Logger.log("ROLL CALL RESULTS: " + JSON.stringify(EmpireStats.CurrentPopulation));
        return;
    }


    public static runTick() {
        // Update / Check Active Creeps
        // CreepFactory.updateStatus();
        
        // Conduct Rollcall to update Empire Population

        // fpr each commander
            // Create creeps if lacking population
        this.rollcall();
        CreepFactory.create();

            // Preform Tick Actions
        Delegator.delegate();

            // Handle task logic.
        
    }
}