import { uuid } from "uuidv4";
// import { v4 as uuidv4 } from 'uuid';

export default function createContacts() {
  return {
    id: uuid()
  };
}
