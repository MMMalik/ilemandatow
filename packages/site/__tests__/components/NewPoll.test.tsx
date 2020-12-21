import * as React from "react";
import NewPoll from "../../src/components/newPoll";

describe("runs", () => {
  test("null", () => {
    const n = <NewPoll />;
    expect(n).not.toBeNull();
  });
});
