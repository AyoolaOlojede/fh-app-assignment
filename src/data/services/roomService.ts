import { useSelector } from "react-redux";
import { GuestRooms } from "src/domain/models/GuestRooms";

class RoomService {

      getChildren(guestRooms: GuestRooms, index: number) {
        return guestRooms.rooms[index].children;
      }
      getChildrenCount(guestRooms: GuestRooms, index: number) {
        return guestRooms.rooms[index].children?.length;
      }
      getAdultsCount(guestRooms: GuestRooms, index: number) {
        return guestRooms.rooms[index].adultsCount;
      }
      getGuestsCount(guestRooms: GuestRooms) {
        return guestRooms.rooms.reduce(
          (guestsCount, room) =>
            guestsCount + (room?.adultsCount ?? 0) + (room.children?.length ?? 0),
          0
        );
      }
      getTotal(count: number,title: string) {
        return count > 1 ? `${count} ${title}s` : `${count} ${title}`;
      }
      getTotalRooms(guestRooms: GuestRooms) {
        return this.getTotal(guestRooms.rooms.length ?? 0, 'room');
      }
      getTotalGuests(guestRooms: GuestRooms) {
        return this.getTotal(this.getGuestsCount(guestRooms) ?? 0, 'guest');
      }
}
export default new RoomService();