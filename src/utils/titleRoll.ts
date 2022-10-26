window.onload = function () {

  let title = document.title;
  let timerId: number | undefined;
  titleRoll();
  function titleRoll() {
    clearTimeout(timerId);
    document.title = title.substring(1, title.length) + title.substring(0, 1);
    title = document.title.substring(0, title.length);
    timerId = setTimeout(titleRoll, 500);
  }
};

export {};
