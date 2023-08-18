//useCounter.test.tsx
import { act, renderHook } from "@testing-library/react-hooks";

import { useCounter } from "../../pages/Home/Viewmodel";
import { describe, expect, it } from "vitest";

describe("useCounter hook", () => {
  it("should increment the count", () => {
    //arrage
    const { result } = renderHook(() => useCounter());

    console.log(":: result ::", result.current);

    //act
    act(() => {
      result.current.increment();
    });

    //assert
    expect(result.current.count).toBe(1);
  });

  it("should decrement the count", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });

  it("should useName = boss", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.useName).toBe("Boss");
  });
});
