//import { action } from "@storybook/addon-actions";

import BasicDropZoneView from "./views/BasicDropzoneView.svelte";
import BasicDropZoneViewSource from "./views/BasicDropzoneView.svelte?raw";
import DisabledDropzoneView from "./views/DisabledDropzoneView.svelte";
import DisabledDropzoneViewSource from "./views/DisabledDropzoneView.svelte?raw";
import CustomSlotDropzoneView from "./views/CustomSlotDropzoneView.svelte";
import CustomSlotDropzoneViewSource from "./views/CustomSlotDropzoneView.svelte?raw";
import NoClickDropZoneView from "./views/NoClickDropzoneView.svelte";
import NoClickDropZoneViewSource from "./views/NoClickDropzoneView.svelte?raw";
import NoDragDropzoneView from "./views/NoDragDropzoneView.svelte";
import NoDragDropzoneViewSource from "./views/NoDragDropzoneView.svelte?raw";

import { sourceParameters } from "./helpers";

export default {
  title: "Examples",
  component: null,
};

export const BasicDropzone = {
  ...sourceParameters(BasicDropZoneViewSource),
  render: () => ({
    Component: BasicDropZoneView,
  }),
};

export const DisabledDropzone = {
  ...sourceParameters(DisabledDropzoneViewSource),
  render: () => ({
    Component: DisabledDropzoneView,
  }),
};

export const CustomSlotDropzone = {
  ...sourceParameters(CustomSlotDropzoneViewSource),
  render: () => ({
    Component: CustomSlotDropzoneView,
  }),
};

export const DropZoneWithClickDisabled = {
  ...sourceParameters(NoClickDropZoneViewSource),
  render: () => ({
    Component: NoClickDropZoneView,
  }),
};

export const DropZoneWithDragDisabled = {
  ...sourceParameters(NoDragDropzoneViewSource),
  render: () => ({
    Component: NoDragDropzoneView,
  }),
};
