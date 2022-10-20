import WorkingCSVFileUploadView from "./views/WorkingCSVFileUploadView.svelte";
import FullyFeaturedDropzoneView from "./views/FullyFeaturedDropzoneView.svelte";

import { README } from "./global";

export default {
  title: "Advanced Examples",
  parameters: {
    notes: { Introduction: README },
  },
};

export const WorkingCSVFileUploadDropzone = () => ({
  Component: WorkingCSVFileUploadView,
  props: {},
});

export const FullyFeaturedImagesDropzone = () => ({
  Component: FullyFeaturedDropzoneView,
  props: {},
});
