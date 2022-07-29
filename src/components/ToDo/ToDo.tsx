import React from 'react';
import { CATEGORY, IToDo } from '../../atoms';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../../atoms';

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) => {
      const targetIndex = prev.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [...prev.slice(0, targetIndex), newToDo, ...prev.slice(targetIndex + 1)];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== CATEGORY.DOING && (
        <button onClick={onClick} name={CATEGORY.DOING}>
          Doing
        </button>
      )}
      {category !== CATEGORY.TO_DO && (
        <button onClick={onClick} name={CATEGORY.TO_DO}>
          To Do
        </button>
      )}
      {category !== CATEGORY.DONE && (
        <button onClick={onClick} name={CATEGORY.DONE}>
          Done
        </button>
      )}
    </li>
  );
};

export default ToDo;
