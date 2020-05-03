var Anagram = require('./anagram')
var testsWords = require('./words.json')

describe('Anagram', function() {
  it("should detect no matches",function() {
    var detector = new Anagram("diaper")
    var matches = detector.match(testsWords["no matches"])
    expect(matches).toEqual([])
  })

  it("should find an anagram",function() {
    var detector = new Anagram("ant")
    var matches = detector.match(testsWords["detects an anagram"])
    expect(matches).toEqual(['tan'])
  })

  it("shouldn't detect false positives",function() {
    var detector = new Anagram("galea")
    var matches = detector.match(testsWords["does not detect false positives"])
    expect(matches).toEqual([])
  })

  it("shouldn't detect anagram subsets",function() {
    var detector = new Anagram("good")
    var matches = detector.match(testsWords["does not detect anagram subsets"])
    expect(matches).toEqual([])
  })

  it("should detect anagram",function() {
    var detector = new Anagram("listen")
    var matches = detector.match(testsWords["detects anagram"])
    expect(matches).toEqual(['inlets'])
  })

  it("should detect multiple anagrams",function() {
    var detector = new Anagram("allergy")
    var matches = detector.match(testsWords["detects multiple anagrams"])
    expect(matches).toEqual(['gallery', 'regally', 'largely'])
  })

  it("should detect anagrams case-insensitively",function() {
    var detector = new Anagram("Orchestra")
    var matches = detector.match(testsWords["detects anagrams case-insensitively"])
    expect(matches).toEqual(['Carthorse'])
  })

  it("shouldn't detect a word as its own anagram",function() {
    var detector = new Anagram("banana")
    var matches = detector.match(testsWords["does not detect a word as its own anagram"])
    expect(matches).toEqual([])
  })

  it("shouldn't detect an anagram if the original word is repeated", function() {
    var detector = new Anagram("go")
    var matches = detector.match(testsWords["does not detect an anagram if the original word is repeated"])
    expect(matches).toEqual([])
  })

  it("shouldn't detect the same words as anagram (case-insensitive)", function() {
    var detector = new Anagram("BANANA")
    var matches = detector.match(testsWords["words are not anagrams of themselves (case-insensitive)"])
    expect(matches).toEqual([])
  })

  it('should detect words other than themselves', function() {
    var detector = new Anagram("LISTEN")
    var matches = detector.match(testsWords["words other than themselves can be anagrams"])
    expect(matches).toEqual(['Silent'])
  })

  it('should detect three anagrams', function() {
    var detector = new Anagram("allergy")
    var matches = detector.match(testsWords["detects three anagrams"])
    expect(matches).toEqual(['gallery', 'regally', 'largely'])
  })

  it('should detect multiple anagrams with different case', function() {
    var detector = new Anagram("nose")
    var matches = detector.match(testsWords["detects multiple anagrams with different case"])
    expect(matches).toEqual(['Eons', 'ONES'])
  })

  it("shouldn't detect non-anagrams with identical checksum", function() {
    var detector = new Anagram("mass")
    var matches = detector.match(testsWords["does not detect non-anagrams with identical checksum"])
    expect(matches).toEqual([])
  })
})