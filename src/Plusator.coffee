define ['knockout'], (ko)->
  class Plusator
    constructor: (x, perc)->
      @x = ko.observable x
      @perc = ko.observable perc
      @answer = ko.computed =>
        x = parseFloat @x()
        perc = parseFloat @perc()
        x + x / 100 * perc
