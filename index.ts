#!/usr/bin/env node --no-warnings

import { program } from "commander";
import { createCommand } from "./lib/core/create.js";
import mypackage from "./package.json" assert { type: "json" };

//查看版本号
program.version(mypackage.version);

//创建指令
createCommand();

program.parse(process.argv);
