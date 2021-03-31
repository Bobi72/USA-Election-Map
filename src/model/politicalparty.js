class PoliticalParty
{
  constructor(id, names, shortName, defaultCandidateName, marginColors, marginNames)
  {
    this.id = id
    this.names = names
    this.shortName = shortName
    this.defaultCandidateName = defaultCandidateName
    this.candidateName = defaultCandidateName
    this.marginColors = marginColors
    this.marginNames = marginNames
  }

  getID()
  {
    return this.id
  }

  getNames()
  {
    return this.names
  }

  getShortName()
  {
    return this.shortName
  }

  setCandidateName(newCandidateName)
  {
    if (newCandidateName != null)
    {
      this.candidateName = newCandidateName
    }
    else
    {
      this.candidateName = this.defaultCandidateName
    }
  }

  getCandidateName()
  {
    return this.candidateName
  }

  getMarginColors()
  {
    return this.marginColors
  }

  getMarginNames()
  {
    return this.marginNames
  }
}

const defaultMarginNames = {safe: "Safe", likely: "Likely", lean: "Lean", tilt: "Tilt"}

// Main Parties

var DemocraticParty = new PoliticalParty(
  "DEM",
  ["Democratic", "Democrat"],
  "Dem",
  "Biden",
  {safe: "#1c408c", likely: "#587ccc", lean: "#8aafff", tilt: "#949bb3"},
  defaultMarginNames
)

var RepublicanParty = new PoliticalParty(
  "REP",
  ["Republican"],
  "Rep",
  "Trump",
  {safe: "#be1c29", likely: "#ff5864", lean: "#ff8b98", tilt: "#cf8980"},
  defaultMarginNames
)

var TossupParty = new PoliticalParty(
  "Tossup",
  ["Tossup"],
  "Tossup",
  null,
  {safe: "#6c6e74", likely: "#6c6e74", lean: "#6c6e74", tilt: "#6c6e74"},
  defaultMarginNames
)

// var DisabledParty = new PoliticalParty(
//   "Disabled",
//   ["Disabled"],
//   "Disabled",
//   null,
//   {safe: "#28292F", likely: "#28292F", lean: "#28292F", tilt: "#28292F"},
//   defaultMarginNames
// )
// Add disabled tag; Remove -S regions if disabled && tossup party

// Third Parties

var LibertarianParty = new PoliticalParty(
  "LIB",
  ["Libertarian"],
  "Lib",
  "Jorgensen",
  {safe: "#e6b701", likely: "#e8c84c", lean: "#ffe78a", tilt: "#c7af59"},
  defaultMarginNames
)

var GreenParty = new PoliticalParty(
  "GRN",
  ["Green"],
  "Grn",
  "Hawkins",
  {safe: "#1C8C28", likely: "#50C85D", lean: "#8AFF97", tilt: "#8EB293"},
  defaultMarginNames
)

var ReformParty = new PoliticalParty(
  "REF",
  ["Reform"],
  "Ref",
  "Perot",
  {safe: "#B18CFE", likely: "#B18CFE", lean: "#B18CFE", tilt: "#B18CFE"},
  defaultMarginNames
)

var IndependentRNParty = new PoliticalParty(
  "INDRN",
  ["Nader"],
  "Ind",
  "Nader",
  {safe: "#B18CFE", likely: "#B18CFE", lean: "#B18CFE", tilt: "#B18CFE"},
  defaultMarginNames
)

var Independent2016EMParty = new PoliticalParty(
  "IND2016EM",
  ["McMullin"],
  "Ind",
  "McMullin",
  {safe: "#B18CFE", likely: "#B18CFE", lean: "#B18CFE", tilt: "#B18CFE"},
  defaultMarginNames
)

var Independent1980JAParty = new PoliticalParty(
  "IND1980JA",
  ["Anderson"],
  "Ind",
  "Anderson",
  {safe: "#B18CFE", likely: "#B18CFE", lean: "#B18CFE", tilt: "#B18CFE"},
  defaultMarginNames
)

var Independent1976EMParty = new PoliticalParty(
  "IND1976EM",
  ["McCarthy"],
  "Ind",
  "McCarthy",
  {safe: "#B18CFE", likely: "#B18CFE", lean: "#B18CFE", tilt: "#B18CFE"},
  defaultMarginNames
)

var IndependentGenericParty = new PoliticalParty(
  "INDGEN",
  ["Independent"],
  "Ind",
  "Generic",
  {safe: "#8A38FF", likely: "#B47BFF", lean: "#CDA7FF", tilt: "#E2BDFF"},
  defaultMarginNames
)

var politicalParties = {}
politicalParties[DemocraticParty.getID()] = DemocraticParty
politicalParties[RepublicanParty.getID()] = RepublicanParty
politicalParties[TossupParty.getID()] = TossupParty

politicalParties[LibertarianParty.getID()] = LibertarianParty
politicalParties[GreenParty.getID()] = GreenParty
politicalParties[ReformParty.getID()] = ReformParty
politicalParties[IndependentRNParty.getID()] = IndependentRNParty
politicalParties[Independent2016EMParty.getID()] = Independent2016EMParty
politicalParties[Independent1980JAParty.getID()] = Independent1980JAParty
politicalParties[Independent1976EMParty.getID()] = Independent1976EMParty

politicalParties[IndependentGenericParty.getID()] = IndependentGenericParty

var selectablePoliticalPartyIDs = [DemocraticParty.getID(), TossupParty.getID(), RepublicanParty.getID()]
var mainPoliticalPartyIDs = [TossupParty.getID(), DemocraticParty.getID(), RepublicanParty.getID(), TossupParty.getID(), LibertarianParty.getID(), GreenParty.getID(), IndependentGenericParty.getID()]
