/*
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["a", "b", "c", "d", "e", "f"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Letters"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
*/

/*
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>Hello World</Alert>
    </div>
  );
}

export default App;

*/

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
