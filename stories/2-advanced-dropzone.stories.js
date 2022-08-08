import WorkingCSVFileUploadView from "./views/WorkingCSVFileUploadView.svelte";
import FullyFeaturedDropzoneView from "./views/FullyFeaturedDropzoneView.svelte";

export default {
  title: "Advanced Examples",
  parameters: {
    notes: { Introduction: __readme__ },
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
