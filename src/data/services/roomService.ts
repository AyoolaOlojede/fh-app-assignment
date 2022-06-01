import { useSelector } from "react-redux";
import { Room } from "src/domain/models/Room";

class RoomService {

      getChildren(guestRooms: Room[], index: number) {
        return guestRooms[index].children;
      }
      getChildrenCount(guestRooms: Room[], index: number) {
        return guestRooms[index].children?.length;
      }
      getAdultsCount(guestRooms: Room[], index: number) {
        return guestRooms.length>0? guestRooms[index].adultsCount: 0;
      }
      getGuestsCount(guestRooms: Room[]) {
        return guestRooms.reduce(
          (guestsCount, room) =>
            guestsCount + (room?.adultsCount ?? 0) + (room.children?.length ?? 0),
          0
        );
      }
      getGuestsCountByRoomIndex(guestRooms: Room[], index: number) {
        return guestRooms[index]?.adultsCount ?? 0 + (guestRooms[index].children?.length ?? 0);
      }
      getTotal(count: number,title: string) {
        return count > 1 ? `${count} ${title}s` : `${count} ${title}`;
      }
      getTotalRooms(guestRooms: Room[]) {
        return this.getTotal(guestRooms.length ?? 0, 'room');
      }
      getTotalGuests(guestRooms: Room[]) {
        return this.getTotal(this.getGuestsCount(guestRooms) ?? 0, 'guest');
      }
}
export default new RoomService();