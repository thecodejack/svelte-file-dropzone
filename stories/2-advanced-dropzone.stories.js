import { action } from "@storybook/addon-actions";

import WorkingCSVFileUploadView from "./views/WorkingCSVFileUploadView.svelte";
import WorkingCSVFileUploadViewSource from "./views/WorkingCSVFileUploadView.svelte?raw";
import FullyFeaturedDropzoneView from "./views/FullyFeaturedDropzoneView.svelte";
import FullyFeaturedDropzoneViewSource from "./views/FullyFeaturedDropzoneView.svelte?raw";

import { sourceParameters } from "./helpers";

export default {
  title: "Advanced Examples",
  component: null,
};

export const WorkingCSVFileUploadDropzone = {
  ...sourceParameters(WorkingCSVFileUploadViewSource),
  render: () => ({
    Component: WorkingCSVFileUploadView,
  }),
};

export const FullyFeaturedImagesDropzone = {
  ...sourceParameters(FullyFeaturedDropzoneViewSource),
  render: () => ({
    Component: FullyFeaturedDropzoneView,
  }),
};
