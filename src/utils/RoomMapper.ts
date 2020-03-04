export class RoomMapper {

    //if valid count up else reset the counter
    public static newRoomView(room: Room): void {
        let counter = 0;
        let roomOwner = "NONE"
        let roomControllerLevel = "UNKOWN";
        let controllerPos = new RoomPosition(1, 1, room.name);
        if (room.controller) {
            controllerPos = room.controller.pos;
            roomOwner = room.controller.owner.username;
            roomControllerLevel = room.controller.level.toString();
        }
        new RoomVisual().text(`${room.name} | ${roomOwner} | ${roomControllerLevel}`, 1, 1, {align: 'left'}); 
        let topLeft = new RoomPosition(controllerPos.x, controllerPos.y, room.name)
        let botRight = new RoomPosition(controllerPos.x + 1, controllerPos.y + 1, room.name)
        let topRight = new RoomPosition(controllerPos.x + 1, controllerPos.y - 1, room.name)
        let botLeft = new RoomPosition(controllerPos.x - 1, controllerPos.y + 1, room.name)
        room.visual.line(topLeft, botRight, {color: 'red', lineStyle: 'dashed'});
        // room.visual.line(botLeft, topRight, {color: 'red', lineStyle: 'dashed'});
    }
}