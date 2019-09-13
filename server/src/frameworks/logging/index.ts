// TODO use winston and sentry to log
export class Log {
    private static readonly console = console;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static log(message?: any, ...optionalParams: any[]): void {
        this.console.log(message, ...optionalParams);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static error(message?: any, ...optionalParams: any[]): void {
        this.console.error(message, ...optionalParams);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static warn(message?: any, ...optionalParams: any[]): void {
        this.console.warn(message, ...optionalParams);
    }
}
