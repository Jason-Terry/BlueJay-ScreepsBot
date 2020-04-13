export class Logger {

    // Log levels TRACE -> DEBUG -> INFO -> LOG
    // Log Types -- INTEL, WATCH, GENERAL(default)
    private static TRACE_PREFIX = `${Game.time} TRC:`;
    private static DEBUG_PREFIX =  `${Game.time} DBG:`;
    private static WARN_PREFIX = `${Game.time} !WRN!`;
    private static INFO_PREFIX = `${Game.time} INF:`;
    private static LOG_PREFIX = `${Game.time} GEN:`;

    public constructor() {
        return this;
    }

    // Log info level event to config targets
    public static trace(msg: string | undefined) : void {
        Logger.log(`${this.TRACE_PREFIX} ${msg}`);
    }

    // Log info level event to config targets
    public static debug(msg: string | undefined) : void {
        Logger.log(`${this.DEBUG_PREFIX} ${msg}`);
    }
    public static warn(msg: string | undefined) : void {
        Logger.log(`${this.WARN_PREFIX} ${msg}`);
    }

    public static info(msg: string | undefined) : void {
        Logger.log(`${this.INFO_PREFIX} ${msg}`);
    }

    public static log(msg: string | undefined) : void {
        Logger.log(`${this.LOG_PREFIX} ${msg}`);
    }

}