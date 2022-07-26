import { atom, selector } from 'recoil';

type categories = 'TO_DO' | 'DOING' | 'DONE';

export const CATEGORY = {
  TO_DO: 'TO_DO',
  DOING: 'DOING',
  DONE: 'DONE',
} as const;
type CATEGORY = typeof CATEGORY[keyof typeof CATEGORY];

export interface IToDo {
  text: string;
  id: number;
  category: categories;
}

export const categoryState = atom<categories>({
  key: 'category',
  default: 'TO_DO',
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
