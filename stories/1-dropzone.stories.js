//import { action } from "@storybook/addon-actions";

import Dropzone from "../src/lib/components/Dropzone.svelte";
import BasicDropZoneView from "./views/BasicDropzoneView.svelte";
import DisabledDropzoneView from "./views/DisabledDropzoneView.svelte";
import CustomSlotDropzoneView from "./views/CustomSlotDropzoneView.svelte";
import NoClickDropZoneView from "./views/NoClickDropzoneView.svelte";
import NoDragDropzoneView from "./views/NoDragDropzoneView.svelte";

//import intro from "./../README.md";

export default {
  title: "Examples",
  component: Dropzone,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};

export const BasicDropzone = {
  render: () => ({
    Component: BasicDropZoneView,
  }),
};

export const DisabledDropzone = {
  render: () => ({
    Component: DisabledDropzoneView,
  }),
};

export const CustomSlotDropzone = {
  render: () => ({
    Component: CustomSlotDropzoneView,
  }),
};

export const DropZoneWithClickDisabled = {
  render: () => ({
    Component: NoClickDropZoneView,
  }),
};

export const DropZoneWithDragDisabled = {
  render: () => ({
    Component: NoDragDropzoneView,
  }),
};
