import { CreepBodies } from "./CreepBodies"
import { EmpireConfig } from "EmpireConfig";
import { CreepNameGen } from "utils/CreepNameGen";

    // MEM Presets


export class CreepFactory {

    public static JobList = [];

    public static rollcall() {
        // Reset the count
        EmpireConfig.PopCurrent.reset();

        // Get new count
        for(const i in Game.creeps) {

            let creep = Game.creeps[i];

            console.log(creep.name + " is of role...");
            console.log(JSON.stringify(Memory.creeps[creep.name].task));

            if (Memory.creeps[creep.name].task == "HRV") {
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

    public static create() {
        // HRV -> UPG -> WRK
        console.log("HRV Current: " + EmpireConfig.PopCurrent.HRV + " | Limit: " + EmpireConfig.PopLimits.HRV);
        if (EmpireConfig.PopCurrent.HRV < EmpireConfig.PopLimits.HRV) {
            Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("HRV"), EmpireConfig.HRV_ROLE);
        } else {
            console.log("HRV at Capacity!");
        }
        /*
        if (EmpireConfig.PopCurrent.UPG < EmpireConfig.PopLimits.UPG) {
            Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("UPG"), new HRVRolePreset);
        } else {
            console.log("UPG at Capacity!");
        }
        
        if (EmpireConfig.PopCurrent.WRK < EmpireConfig.PopLimits.WRK) {
            Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("WRK"), new HRVRolePreset);
        } else {
            console.log("WRK at Capacity!");
        }
        */
    }
}