define ['knockout'], (ko)->
  ###
  главная view model
  ###
  class Plusator

    constructor: (params)->
      @x = ko.observable params.x
      @perc = ko.observable params.perc
      @answer = ko.computed @do

    do: =>
      x = parseFloat @x()
      perc = parseFloat @perc()
      x + x / 100 * perc
