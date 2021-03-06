import { CreepBodies } from "./CreepBodies"
import { EmpireConfig } from "Empire";
import { EmpireStats  } from "Empire";
import { Logger } from "utils/Logger";

// Tick
// 1. RollCall to see what the current roles of living creeps are.
// 2. 

export class CreepFactory {

    public static JobList = [];

    public static nameCreep(task: string) {
        let id = Math.floor(1000 + Math.random() * 9000);
        return task + String(id);
    }

    public static rollcall() {
        // Reset the count
        EmpireStats.CurrentPopulation.reset();

        // Get new count
        for (const i in Game.creeps) {

            let creep = Game.creeps[i];
            /* TRACE LOGS
                        Logger.log(creep.name + " is of role...");
                        Logger.log(JSON.stringify(Memory.creeps[creep.name].currTask));
            */
            if (Memory.creeps[creep.name].role == "HAR") {
                EmpireStats.CurrentPopulation.HRV += 1;
            } else if (Memory.creeps[creep.name].role == "UPG") {
                EmpireStats.CurrentPopulation.UPG += 1;
            } else if (Memory.creeps[creep.name].role == "WRK") {
                EmpireStats.CurrentPopulation.WRK += 1;

            } else if (Memory.creeps[creep.name].role == "BLD") {
                EmpireStats.CurrentPopulation.BLD += 1;

            } else {
                Logger.warn("!!Invalid Creep Role detected in Empire Population Count!!")
                // error
            }
        }

        // Is our new count, not the same as our current.
        // INFO log
        Logger.log("Population: " + JSON.stringify(EmpireStats.CurrentPopulation));
        return;
    }

    public static create() {
        // HRV -> UPG -> WRK
        if (Game.spawns['Spawn1'].spawning) {
            Logger.log("Room Spawner is Currently working..")
            return;
        }

        // Tier Check?

        if (EmpireStats.CurrentPopulation.HRV < EmpireConfig.PopulationLimits.HRV) {
            Logger.log("Creation Check Passed: HAR")
            if (Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, this.nameCreep("HAR"), { memory: EmpireConfig.HRV_ROLE, dryRun: true }) === 0) {
                Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, this.nameCreep("HAR"), { memory: EmpireConfig.HRV_ROLE });
                Logger.log("HAR creep created!");
            };
            return;
        }

        if (EmpireStats.CurrentPopulation.UPG < EmpireConfig.PopulationLimits.UPG) {
            Logger.log("Creation Check Passed: UPG")
            if (Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, this.nameCreep("UPG"), { memory: EmpireConfig.UPG_ROLE, dryRun: true }) === 0) {
                Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, this.nameCreep("UPG"), { memory: EmpireConfig.UPG_ROLE });
                Logger.log("UPG creep created!");
            };
            return;
        };

        if (EmpireStats.CurrentPopulation.BLD < EmpireConfig.PopulationLimits.BLD ) {
            Logger.log("Creation Check Passed: BLD")
            if (Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, this.nameCreep("BLD"), { memory: EmpireConfig.BLD_ROLE, dryRun: true }) === 0) {
                Game.spawns['Spawn1'].spawnCreep(CreepBodies.T1_WORKER, this.nameCreep("BLD"), { memory: EmpireConfig.BLD_ROLE });
                Logger.log("BLD creep created!");
            };
            return;
        }
    }
}