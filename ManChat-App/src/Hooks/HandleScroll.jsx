function HandleScroll (inputRef, baseRef, delay) {
  if (inputRef && inputRef.current) {
    inputRef.current.focus();

    setTimeout(() => {
      if (Platform.OS === 'ios') {
        baseRef.current.scrollTo({
          y: inputRef.current.measureLayout(
            baseRef.current,
            (x, y) => y
          ),
          animated: true,
        });
      } else {
        inputRef.current.measureLayout(
          baseRef.current,
          (x, y) => {
            baseRef.current.scrollTo({ y, animated: true });
          }
        );
      }
    }, delay);
  }
};

export default HandleScroll;