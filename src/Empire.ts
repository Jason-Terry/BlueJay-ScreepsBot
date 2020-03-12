export class EmpireConfig {
    // Should parse the config file if one has not been parsed
    // Should setup at first loop iteration.
    // Then check config hash for changes, every time the config is saves, gen a new hash.
    // If the hash changes, load the new config.

    // Creep Memory Presets
    public static HRV_ROLE = {
        role: "HRV",
        currTask: "HRV"
    }

    public static UPG_ROLE = {
        role: "UPG",
        currTask: "UPG"
    }

    public static WRK_ROLE = {
        role: "WRK",
        currTask: "WRK"
    }

    public static BLD_ROLE = {
        role: "BLD",
        currTask: "BLD"
    }

    // Configuration Objects
    public static readonly PopulationLimits = {  
        HRV: 3, 
        UPG: 3, 
        WRK: 1,
        BLD: 1
    }
}

/*
export class RoomStructs {


}
*/

export class EmpireStats {
    public static CurrentPopulation = {  
        HRV: 0, 
        UPG: 0, 
        WRK: 0,
        BLD: 0,
        reset: function() {
            this.HRV = 0;
            this.UPG = 0;
            this.WRK = 0;
            this.BLD = 0;
        }
    }
}