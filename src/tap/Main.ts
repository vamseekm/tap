import * as Minimist from "minimist";

import {Tasks} from "app/Tasks";

export class Main {

    public static async main() {
        const args = this.parseArgs(process.argv.slice(2));
        const taskName = args._[0];
        if (taskName == null) {
            throw Error(`Task name not supplied.`);
        }
        const task = (Tasks as any)[taskName];
        await task(args);
    }

    private static parseArgs(argv: string[]): any {
        return Minimist(argv);
    }

}

Main.main();
