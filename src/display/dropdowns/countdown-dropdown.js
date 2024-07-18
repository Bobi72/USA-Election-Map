const electionDayTime2020 = 1604444400000 //1604390400000 PST
const electorsCastVotesTime = 1607965200000
const congressCountsVotesTime = 1609952400000
const inaugurationDayTime2021 = 1611162000000
const inaugurationDayTime2025 = 1737392400000

const electionDayTime2021 = 1635890400000
const electionDayTime2022 = 1667948400000
const electionDayTime2024 = 1730847600000
const electionDayTime2026 = 1793746800000

const countdownTimes = {
  // "2020 Presidential Election": {time: electionDayTime2020, url: "https://en.wikipedia.org/wiki/2020_United_States_presidential_election"},
  "2021 Inauguration Day": {time: inaugurationDayTime2021, url: "https://en.wikipedia.org/wiki/Inauguration_of_Joe_Biden"},
  // "2022 Midterm Elections": {time: electionDayTime2022, url: "https://en.wikipedia.org/wiki/2022_United_States_elections"},
  "2024 Presidential Election": {time: electionDayTime2024, url: "https://en.wikipedia.org/wiki/2024_United_States_presidential_election"},
  "2025 Inauguration Day": {time: inaugurationDayTime2025, url: null},
  "2026 Midterm Elections": {time: electionDayTime2026, url: "https://en.wikipedia.org/wiki/2026_United_States_elections"},
}
var currentCountdownTimeName

function createCountdownDropdownItems()
{
  $("#countdownsDropdownContainer").html("")
  for (var timeName in countdownTimes)
  {
    $("#countdownsDropdownContainer").append("<div class='dropdown-separator'></div>")
    $("#countdownsDropdownContainer").append("<a id='" + timeName + "-countdown' style='padding-top: 14rem; min-height: 25rem;' onclick='selectCountdownTime(\"" + timeName + "\", this)'>" + timeName + "</a>")
  }

  updateCountdownTimer()
  $("[id='" + currentCountdownTimeName + "-countdown']").addClass("active")
  $("#countdownDisplay").attr('href', countdownTimes[currentCountdownTimeName].url)
}

function selectCountdownTime(countdownTimeName, countdownButtonDiv)
{
  $("#countdownsDropdownContainer .active").removeClass("active")
  $(countdownButtonDiv).addClass("active")

  currentCountdownTimeName = countdownTimeName
  $("#countdownDisplay").attr('href', countdownTimes[currentCountdownTimeName].url)
  updateCountdownTimer()
}

function updateCountdownTimer()
{
  var currentDate = new Date()

  var countdownTime
  if (currentCountdownTimeName != null)
  {
    countdownTime = countdownTimes[currentCountdownTimeName].time
  }
  else
  {
    countdownTime = Object.values(countdownTimes).map((timeData) => {return timeData.time}).sort().slice(-1)[0]
    for (let timeName in countdownTimes)
    {
      if (currentDate.getTime() < countdownTimes[timeName].time)
      {
        countdownTime = countdownTimes[timeName].time
        break
      }
    }

    for (let timeName in countdownTimes)
    {
      if (countdownTime == countdownTimes[timeName].time)
      {
        currentCountdownTimeName = timeName
        break
      }
    }
  }

  var timeUntilDay = Math.abs(countdownTime-currentDate.getTime())
  var timeHasPassed = Math.sign(countdownTime-currentDate.getTime()) == -1

  var daysUntilDay = Math.floor(timeUntilDay/(1000*60*60*24))
  var hoursUntilDay = Math.floor(timeUntilDay/(1000*60*60)%24)
  var minutesUntilDay = Math.floor(timeUntilDay/(1000*60)%60)
  var secondsUntilDay = Math.floor(timeUntilDay/1000%60)

  $("#countdownDisplay").html((timeHasPassed ? "+" : "–") + " " + daysUntilDay + "<span style='font-size: 16rem;'> day" + (daysUntilDay == 1 ? "" : "s") + "</span>&nbsp;&nbsp;" + zeroPadding(hoursUntilDay) + "<span style='font-size: 16rem;'> hr" + (hoursUntilDay == 1 ? "" : "s") + "</span>&nbsp;&nbsp;" + zeroPadding(minutesUntilDay) + "<span style='font-size: 16rem;'> min" + (minutesUntilDay == 1 ? "" : "s") + "</span>&nbsp;&nbsp;" + zeroPadding(secondsUntilDay) + "<span style='font-size: 16rem;'> s" + "</span>")
}
