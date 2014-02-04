class GlasgowJS
  describe: "Is all kind of awesome"
  everyOneWritesTest: true

describe("Glasgow JS", ->
  it("Is all kinds of awesome", ->
    glasgowJs = new GlasgowJS()
    expect(glasgowJs.describe).toEqual("Is all kind of awesome")
  )

  it("we all write javascript test", ->
    glasgowJs = new GlasgowJS()
    expect(glasgowJs.everyOneWritesTest).toBeTruthy()
  )
)
