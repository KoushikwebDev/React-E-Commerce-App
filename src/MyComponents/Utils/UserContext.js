import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Koushik",
    skills: "JavaScript",
  },
});

UserContext.displayName = "UserContext"; // it is for react Devtool, by this we Can see the context name

export default UserContext;
