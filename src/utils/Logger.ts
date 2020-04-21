export class Logger {

    // Log levels TRACE -> DEBUG -> INFO -> LOG
    // Log Types -- INTEL, WATCH, GENERAL(default)
    private static TRACE_PREFIX = `[:TRC:]`;
    private static DEBUG_PREFIX =  `[:DBG:]`;
    private static WARN_PREFIX = `[!WRN!]`;
    private static INFO_PREFIX = `[:INF:]`;
    private static LOG_PREFIX = `[:GEN:]`;

    public constructor() {
        return this;
    }

    // Log info level event to config targets
    public static trace(msg: string | undefined) : void {
        console.log(`[${Game.time}] ${this.TRACE_PREFIX} ${msg}`);
    }

    // Log info level event to config targets
    public static debug(msg: string | undefined) : void {
        console.log(`[${Game.time}] ${this.DEBUG_PREFIX} ${msg}`);
    }
    public static warn(msg: string | undefined) : void {
        console.log(`[${Game.time}] <span style='color:red'>${this.WARN_PREFIX} ${msg}</span>`);
    }

    public static info(msg: string | undefined) : void {
        console.log(`[${Game.time}] ${this.INFO_PREFIX} ${msg}`);
    }

    public static log(msg: string | undefined) : void {
        console.log(`[${Game.time}] ${this.LOG_PREFIX} ${msg}`);
    }
    
}