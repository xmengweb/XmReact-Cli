import { promisify } from "util";
import downloadGitRepo from "download-git-repo";
import prompts, { PromptObject } from "prompts";
import ora from "ora";
import { ReactRep } from "../config/react-repo-config.js";

const questions: PromptObject<string>[] = [
  {
    type: "text",
    name: "username",
    message: "use redux?",
  },
  {
    type: "number",
    name: "age",
    message: "use css in js?",
  },
  {
    type: "text",
    name: "about",
    message: "use antd?",
  },
  {
    type: "text",
    name: "about",
    message: "use router?",
  },
];
const download = promisify(downloadGitRepo);

export const createProjectAction = async (project: any) => {
  //1.clone项目
  const spinner = ora("Loading~~").start();
  await download(ReactRep, project, { clone: true });
  spinner.stop();
  const response = await prompts(questions);
};
