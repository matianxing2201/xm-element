import Message from "./methods";
import { withInstallFunction } from "@xm-element/utils";

export const XmMessage = withInstallFunction(Message, "$message");

export * from "./types";
