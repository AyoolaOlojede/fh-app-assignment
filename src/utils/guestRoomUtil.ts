import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Room } from "src/domain/models/Room";
import Constants from 'expo-constants';
import { Child } from 'src/domain/models/Child';



const DEFAULT_GUEST_ROOMS:Room[]= [
      {
        id:uuidv4(),
        adultsCount:2,
        children:[],
      },
    ];
const convertChildren = (childParam: string) => {
    const children = childParam.split(Constants.CHILDREN_AGE_SEPARATOR);
    const result= children.map((age: string) => ({ age: Number(age) }));
    return result;
}

const ageConverter = (children: Child[]) =>{
  return children.map(({ age }) => age).join(Constants.CHILDREN_AGE_SEPARATOR);
}

const convertGuestRooms = (rooms: Room[], room: string) => {
  const [adultsCount, childrenString] = room.split(Constants.ADULT_CHILDREN_SEPARATOR);
  const children = childrenString ? convertChildren(childrenString) : [];
  rooms.push({
    id:uuidv4(),
    adultsCount: Number(adultsCount),
    children,
  });

  return rooms;
}

const adultsAndChildrenAgeConverter = ({ adultsCount, children }: Room) => {
  const ages = ageConverter(children!);
  return ageConverter(children!)
    ? adultsCount + Constants.ADULT_CHILDREN_SEPARATOR + ages
    : adultsCount;
}

const  GuestRoomsConverter = (rooms: string) => {
  const guestRooms = rooms.split(Constants.ROOM_SEPARATOR);
  return guestRooms.reduce<Room[]>(convertGuestRooms, []);
}

const GuestRoomsResult = (rooms: Room[]) =>
{
  return rooms
  .map(adultsAndChildrenAgeConverter)
  .join(Constants.ROOM_SEPARATOR);
};

export { GuestRoomsConverter ,DEFAULT_GUEST_ROOMS ,GuestRoomsResult};
