import * as React from "react";

import { FetchOneWordDataResultInterface } from "./utils.types";

type SorurceOrDestinationType = {
  droppableId: string;
  index: number;
};

export interface WordReducerStateInterface {
  words: FetchOneWordDataResultInterface[];
}

export interface ReorderReducerPayloadInterface {
  source: SorurceOrDestinationType;
  destination: SorurceOrDestinationType;
}
