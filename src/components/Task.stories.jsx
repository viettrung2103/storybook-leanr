import { fn } from "@storybook/test";

import Task from "./Task";

export const ActionsData = {
  onArchiveTask: fn(),
  onPicnTask: fn(),
};

export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task ",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      stage: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      stage: "TASK_ARCHIVED",
    },
  },
};
