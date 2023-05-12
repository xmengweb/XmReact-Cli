import { program } from "commander";
import { createProjectAction } from "./actions.js";

const createCommand = () => {
  program
    .command("create")
    .description("clone a repository into a folder")
    .argument("<project>", "the name of project")
    .action(createProjectAction);
};

export { createCommand };
