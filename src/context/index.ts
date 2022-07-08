import { createContext } from "react";
import { IAppContext } from "./types";
import { initialValue } from "./values";

const AppContext = createContext<IAppContext>(initialValue)


export default AppContext