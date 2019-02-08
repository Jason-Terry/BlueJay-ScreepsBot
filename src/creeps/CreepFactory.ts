import { CreepBodies } from "./CreepBodies"
import { EmpireConfig } from "EmpireConfig";
import { CreepNameGen } from "utils/CreepNameGen";

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
        let working = false;
        console.log("Checking if working..")
        if(Game.spawns['Spawn1'].spawning) {
            console.log("Currently working.. Setting flag...")
            working = true;
        }

        console.log("Creation Check: HRV")
        console.log(EmpireConfig.PopCurrent.HRV + " < " + EmpireConfig.PopLimits.HRV)
        if (EmpireConfig.PopCurrent.HRV < EmpireConfig.PopLimits.HRV && !working) {
            console.log("HRV creep created!");
            Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("HRV"), { memory: EmpireConfig.HRV_ROLE });
            working = true;
        } else {
            console.log("HRV at Capacity!");
        }

        console.log("Creation Check: UPG")
        console.log(EmpireConfig.PopCurrent.UPG + " < " + EmpireConfig.PopLimits.UPG)
        if (EmpireConfig.PopCurrent.UPG < EmpireConfig.PopLimits.UPG  && !working) {
            console.log("UPG creep created!");
            Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("UPG"), { memory: EmpireConfig.UPG_ROLE });
            working = true;
        } else {
            console.log("UPG at Capacity!");
        }
        
        console.log("Creation Check: WRK")
        console.log(EmpireConfig.PopCurrent.WRK + " < " + EmpireConfig.PopLimits.WRK)
        if (EmpireConfig.PopCurrent.WRK < EmpireConfig.PopLimits.WRK  && !working) {
            console.log("WRK creep created!");
            Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("WRK"), { memory: EmpireConfig.WRK_ROLE });
            working = true;
        } else {
            console.log("WRK at Capacity!");
        }
    }
}