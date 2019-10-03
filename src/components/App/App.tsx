import React, { useEffect } from "react";
import Router from "./Router";

import { observer} from "mobx-react";
import { useStore } from "../../store";

const App = () => {
  const store = useStore();
  useEffect(() => {
    store.app.configure();
  }, [store.app]);
  return <Router />;
};

export default observer(App);
