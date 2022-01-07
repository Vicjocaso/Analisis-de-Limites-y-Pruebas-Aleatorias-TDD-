describe("client", () => {
  it("Create a door Open and unlocked, verify is the door is open and unlocked", () => {
    const door = new Door("123");
    let doorOpen = door.openAndUnlocked();
    assert.equal(doorOpen.isOpen(), true);
    assert.equal(doorOpen.isUnlocked(), true);
  });
});
