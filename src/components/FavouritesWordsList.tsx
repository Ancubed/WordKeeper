import classname from "classnames";
import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

import { reorder } from "../redux/wordsSlice";
import { setAllWords } from "../utils/storage";

import { FavouritesWordListPropsInterface } from "../types/props.types";

import Word from "./Word";

const FavouritesWordsList: React.FC<FavouritesWordListPropsInterface> = ({
  className,
  wordsSearchData,
  dragAndDropEnabled,
}: FavouritesWordListPropsInterface) => {
  const dispatch = useDispatch();

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    dispatch(
      reorder({ source: result.source, destination: result.destination })
    );
  };

  useEffect(() => {
    if (dragAndDropEnabled) {
      setAllWords(wordsSearchData);
    }
  }, [dragAndDropEnabled, wordsSearchData]);

  if (!wordsSearchData || wordsSearchData.length === 0)
    return <div className="w-full text-center mt-2">Здесь пока пусто</div>;

  if (dragAndDropEnabled)
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="words">
          {(provided) => (
            <div
              className={classname("select-none mt-4", className)}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {wordsSearchData.map((wrd, index) => (
                <Draggable key={wrd.word} draggableId={wrd.word} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Word
                        word={wrd.word}
                        propsWordSearchData={wrd}
                        isDraggable={dragAndDropEnabled}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );

  return (
    <div className={classname("select-none mt-4", className)}>
      {wordsSearchData.map((wrd) => (
        <Word key={wrd.word} word={wrd.word} propsWordSearchData={wrd} />
      ))}
    </div>
  );
};

export default FavouritesWordsList;
