class Commander {

    private intelLevel: string; // INF > DEB > TRC
    private alertLevel: number; // 0 > 1 > 2

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
}

export default Commander;