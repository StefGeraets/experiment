const handleTicket = (age, cbYoung, cbAdult) => {
  if (age <= 13) {
    cbYoung();
  }
  if (age > 13) {
    cbAdult();
  }
};

describe("handeTicket", () => {
  it("should handle ticket for young ticket holders", () => {
    const mockYoung = jest.fn(() => {});
    const mockAdult = jest.fn(() => {});

    handleTicket(12, mockYoung, mockAdult);

    expect(mockYoung).toHaveBeenCalled();
    expect(mockAdult).not.toHaveBeenCalled();
  });

  it("should handle ticket for adult ticket holders", () => {
    const mockYoung = jest.fn(() => {});
    const mockAdult = jest.fn(() => {});

    handleTicket(16, mockYoung, mockAdult);

    expect(mockAdult).toHaveBeenCalled();
    expect(mockYoung).not.toHaveBeenCalled();
  });
});
