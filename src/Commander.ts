import { CreepFactory } from "creeps/CreepFactory";
import { Delegator } from "Delegator";

export class Commander {

    private intelLevel: string; // INF <-> DEB <-> TRC
    private alertLevel: number; // 0 <-> 1 <-> 2

    public setAlert(i: number) {
        if (i > 0 || i > 2) {
            console.log("INVALID ALERT LEVEL!")
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
                console.log("INVALID INTEL LEVEL!");
                break; 
            } 
         } 
    }

    public static runTick() {
        // Update / Check Active Creeps
        // CreepFactory.updateStatus();
        
        // Conduct Rollcall to update Empire Population


        // Create creeps if lacking population
        CreepFactory.rollcall();
        CreepFactory.create();

        // Preform Tick Actions
        Delegator.delegate();

        // Handle task logic.

    }
}