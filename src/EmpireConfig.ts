export class EmpireConfig {

    // Mem presets
    public static HRV_ROLE = {
        task: "HRV"
    }

    public static UPG_ROLE = {
        task: "UPG"
    }

    public static WRK_ROLE = {
        task: "WRK"
    }
    // Config Objs
    public static readonly PopLimits = {  
        "HRV": 5, 
        "UPG": 5, 
        "WRK": 3
    }

    public static PopCurrent = {
        "HRV": 0, 
        "UPG": 0, 
        "WRK": 0,
        reset: function() {
            this.HRV = 0; 
            this.UPG = 0; 
            this.WRK = 0;
        }
    }
}