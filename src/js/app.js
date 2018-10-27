import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/AppContainer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTrash, faPen, faTimes, faUndo } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faTrash, faPen, faTimes, faUndo);

ReactDOM.render(<AppContainer />, document.getElementById("app"));