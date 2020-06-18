import { action } from "@storybook/addon-actions";

import WorkingCSVFileUploadView from "./views/WorkingCSVFileUploadView.svelte";

import intro from "./../README.md";

export default {
  title: "Advanced Examples",
  parameters: {
    notes: { Introduction: intro },
  },
};

export const WorkingCSVFileUploadDropzone = () => ({
  Component: WorkingCSVFileUploadView,
  props: {},
});
