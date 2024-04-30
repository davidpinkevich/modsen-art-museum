const debounce = (
  funcOne: (value: string) => void,
  funcTwo: (value: number) => void,
  delay: number = 350
) => {
  let timer: number | null = null;

  return (search: string) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
      funcOne(search);
      funcTwo(1);
    }, delay);
  };
};

export { debounce };
