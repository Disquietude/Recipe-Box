import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/AppContainer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTrash, faPen, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faTrash, faPen, faTimes);

ReactDOM.render(<AppContainer />, document.getElementById("app"));