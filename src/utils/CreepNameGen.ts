export class CreepNameGen {


    public static nameCreep(task: string) {
        let id = Math.floor(1000 + Math.random() * 9000);
        return task + String(id);
    }







}