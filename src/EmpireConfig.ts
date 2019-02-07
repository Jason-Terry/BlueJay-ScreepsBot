export class EmpireConfig {

    // Config Objs
    public static readonly PopLimits = { 
        "TOTAL": 5, 
        "HRV": 3, 
        "UPG": 2, 
        "WRK": 0
    }

    public static PopCurrent = { 
        "TOTAL": 0, 
        "HRV": 0, 
        "UPG": 0, 
        "WRK": 0,
        reset: function() {
            this.TOTAL = 0; 
            this.HRV = 0; 
            this.UPG = 0; 
            this.WRK = 0;
        }
    }
}