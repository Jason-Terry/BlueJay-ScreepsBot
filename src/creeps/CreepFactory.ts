import { CreepBodies } from "./CreepBodies"
import { EmpireConfig } from "EmpireConfig";

export class CreepFactory {

    public static JobList = [];

    public static rollcall() {
        // Reset the count
        EmpireConfig.PopCurrent.reset();

        // Get new count
        for(const i in Game.creeps) {
            let creep = Game.creeps[i];
            console.log(creep.name + " is of role...");
            console.log(JSON.stringify(Memory.creeps[creep.name]));
            if (Memory.creeps[creep.name].task == "HRV") {
                console.log("HRV");
                EmpireConfig.PopCurrent.HRV += 1;
            } else if (Memory.creeps[creep.name].task == "UPG") {
                EmpireConfig.PopCurrent.UPG += 1;
            } else if (Memory.creeps[creep.name].task == "WRK") {
                EmpireConfig.PopCurrent.WRK += 1;
            } else {
                // error
            }
        }

        // Is our new count, not the same as our current.
        console.log("ROLL CALL RESULTS: " + JSON.stringify(EmpireConfig.PopCurrent));
        return;
    }

    public static create(tier: string) {
        console.log("Processing next request for " + tier);
        Game.spawns['Spawn1'].createCreep(CreepBodies.T1_WORKER);

    }




}