import { ActionKey } from "authentication/key";

class ActionTest {
  showActionKey() {
    console.log(ActionKey);
  }
}

const test = new ActionTest();
test.showActionKey();
