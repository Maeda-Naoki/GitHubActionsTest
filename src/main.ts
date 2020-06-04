import { ActionKey } from "authentication/Key";

class ActionTest {
  showActionKey() {
    console.log(ActionKey);
  }
}

const test = new ActionTest();
test.showActionKey();
