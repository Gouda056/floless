type EvType = {
  year: string;
  value: string;
};
type spaceType = 
  { id: number, label: string, value: string };

export const customEventDateLabel = (option: EvType) => {
  return `${option.year}`;
};

export const customSelectValue = (option: EvType) => {
  return option.year;
};
export const customSpaceLabel = (option: spaceType) => {
  return `${option.label}`;
};
export const customSpaceValue = (option: spaceType) => {
  return `${option.id}`;
};

