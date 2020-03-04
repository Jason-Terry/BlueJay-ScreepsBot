let FIRST_SPAWN_TEMP: string[][] = [['', '', '', '', ''],
                                    ['', '', '', '', ''],
                                    ['T', '', 'S', '', 'T'],
                                    ['', '', '', '', ''],
                                    ['C', 'C', 'C', 'C', 'C']]

export class StructureUtil {

    public static getStructureMap(room: Room)  {
        const map = _.groupBy(room.find(FIND_STRUCTURES), 'structureType');
        return map;
    }
    
}