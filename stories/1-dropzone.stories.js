import BasicDropZoneView from "./views/BasicDropzoneView.svelte";
import DisabledDropzoneView from "./views/DisabledDropzoneView.svelte";
import CustomSlotDropzoneView from "./views/CustomSlotDropzoneView.svelte";
import NoClickDropZoneView from "./views/NoClickDropzoneView.svelte";
import NoDragDropzoneView from "./views/NoDragDropzoneView.svelte";

import { README } from "./global";

export default {
  title: "Examples",
  parameters: {
    notes: { Introduction: README, 'Other': 'other' },
  },
};

export const BasicDropzone = () => ({
  Component: BasicDropZoneView,
  props: {},
});

export const DisabledDropzone = () => ({
  Component: DisabledDropzoneView,
  props: {},
});

export const CustomSlotDropzone = () => ({
  Component: CustomSlotDropzoneView,
  props: {},
});

export const DropZoneWithClickDisabled = () => ({
  Component: NoClickDropZoneView,
  props: {},
});

export const DropZoneWithDragDisabled = () => ({
  Component: NoDragDropzoneView,
  props: {},
});
