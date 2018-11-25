export class TasksClass {

    public hello(args: any) {
        console.log("this is hello new");
        console.log(args);
    }

    public serverStart(args: any) {
        const port = args.port;
        if (port == null) {
            throw Error("Please supply port");
        }
    }

}

export const Tasks = new TasksClass();
