import { CreepBodies } from "./CreepBodies"
import { EmpireConfig } from "Empire";
import { EmpireStats  } from "Empire";
import { CreepNameGen } from "utils/CreepNameGen";

// Tick
// 1. RollCall to see what the current roles of living creeps are.
// 2. 

export class CreepFactory {

    public static JobList = [];

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
            if (Memory.creeps[creep.name].role == "HRV") {
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
        console.log("ROLL CALL RESULTS: " + JSON.stringify(EmpireStats.CurrentPopulation));
        return;
    }

    public static create() {
        // HRV -> UPG -> WRK
        console.log("Checking if working..")
        if(Game.spawns['Spawn1'].spawning) {
            console.log("Currently working..")
            return;
        }

        console.log("Creation Check: HRV")
        if (EmpireStats.CurrentPopulation.HRV < EmpireConfig.PopulationLimits.HRV) {
            if (Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("HRV"), { memory: EmpireConfig.HRV_ROLE, dryRun: true }) === 0) {
                Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("HRV"), { memory: EmpireConfig.HRV_ROLE });
                console.info("HRV creep created!");
            };
            return;
        }

        console.log("Creation Check: UPG")
        if (EmpireStats.CurrentPopulation.UPG < EmpireConfig.PopulationLimits.UPG) {
            if (Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("UPG"), { memory: EmpireConfig.UPG_ROLE, dryRun: true }) === 0) {
                Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("UPG"), { memory: EmpireConfig.UPG_ROLE });
                console.info("UPG creep created!");
            };
            return;
        };
        
        console.log("Creation Check: WRK")
        if (EmpireStats.CurrentPopulation.WRK < EmpireConfig.PopulationLimits.WRK ) {
            if (Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("WRK"), { memory: EmpireConfig.WRK_ROLE, dryRun: true }) === 0) {
                Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, CreepNameGen.nameCreep("WRK"), { memory: EmpireConfig.WRK_ROLE });
                console.info("WRK creep created!");
            };
            return;
        }
    }
}