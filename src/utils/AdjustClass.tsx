import { IAdjustClass } from '../types/types';

export const superToggleClass = ({
  element,
  class0,
  class1,
  class2
}: IAdjustClass) => {
  element.current?.classList.toggle(class0);
  element.current?.classList.toggle(class1);
  if (class2) {
    element.current?.classList.toggle(class2);
  }
};

export const superRemoveClass = ({
  element,
  class0,
  class1,
  class2
}: IAdjustClass) => {
  element.current?.classList.remove(class0);
  element.current?.classList.remove(class1);
  if (class2) {
    element.current?.classList.remove(class2);
  }
};
