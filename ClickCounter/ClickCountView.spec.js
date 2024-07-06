const { beforeEach } = require("node:test");

describe("App.ClickCountView", () => {
  let updateEl, clickCounter, view;
  beforeEach(() => {
    clickCounter = App.ClickCounter();
    updateEl = document.createElement("span");
    view = App.ClickCounterView(ClickCount, updateEl);
  });

  if (
    ("주입 안됨있음",
    () => {
      const clickCounter = null;
      const updateEl = document.createElement("span");

      const acutal = () => App.ClickCounterView(clickCOunter, updateEl);
      expect(acutal).toThrowError();
    })
  )
    describe("updateView()", () => {
      it("ClickCounter의 getValue() 값을 출력한다", () => {
        const counterValue = clickCounter.getValue();
        view.updateView();
        expect(updateEl.innerHTML).toBe(counterValue.toString());
      });
    });
});
