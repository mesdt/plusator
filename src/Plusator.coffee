define ['knockout'], (ko)->
  ###
  главная view model
  ###
  class Plusator

    constructor: (x, perc)->
      @x = ko.observable x
      @perc = ko.observable perc
      @answer = ko.computed @do

    do: =>
      x = parseFloat @x()
      perc = parseFloat @perc()
      x + x / 100 * perc
