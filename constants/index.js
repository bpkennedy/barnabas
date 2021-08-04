export const MESSAGES_LIST_NAME = 'messages'
export const EVENTS_LIST_NAME = 'events'
export const RESOURCES_LIST_NAME = 'resources'
export const ACTIVITIES_LIST_NAME = 'activities'

// Top level nav item names
const HOME = 'home'
const SUNDAYS = 'sundays'
const MINISTRIES = 'ministries'
const GET_INVOLVED = 'getinvolved'
const EVENTS = 'events'
const RESOURCES = 'resources'
const ABOUT = 'about'

// Sublevel nav link names
const VISION = 'vision'
const NEWS = 'news'
const SERVICES = 'services'
const WORSHIP = 'worship'
const STUDY_GROUP = 'studygroup'
const TEAM = 'team'
const BARUNDI = 'barundi'
const SERVING = 'serving'
const GARDEN = 'garden'
const CHOIR = 'choir'
const REPORTS = 'reports'
const ARCHIVES = 'archives'
const SALTER = 'salter'
const LINKS = 'links'
const HISTORY = 'history'
const CONTACT = 'contact'
const LOCATION = 'location'

const HOME_LINKS = [
  { title: 'Our Vision and Mission Statements', to: { path: '/', hash: `#${VISION}` } },
  { title: 'News', to: { path: `/${NEWS}` } }
]
const SUNDAYS_LINKS = [
  { title: 'Services', to: { path: `/${SUNDAYS}`, hash: `#${SERVICES}` } },
  { title: 'Worship', to: { path: `/${SUNDAYS}`, hash: `#${WORSHIP}` } }
]
const MINISTRIES_LINKS = [
  { title: 'Adult Study Group', to: { path: `/${MINISTRIES}`, hash: `#${STUDY_GROUP}` } },
  { title: 'TEAM Food Drive', to: { path: `/${MINISTRIES}`, hash: `#${TEAM}` } },
  { title: 'Barundi Clean Water', to: { path: `/${MINISTRIES}`, hash: `#${BARUNDI}` } }
]
const GET_INVOLVED_LINKS = [
  { title: 'Serving Schedule', to: { path: `/${GET_INVOLVED}`, hash: `#${SERVING}` } },
  { title: 'Community Garden', to: { path: `/${GET_INVOLVED}`, hash: `#${GARDEN}` } },
  { title: 'Adult Choir', to: { path: `/${GET_INVOLVED}`, hash: `#${CHOIR}` } }
]
const EVENTS_LINKS = [
  { title: 'Calendar of Activities', to: { path: `/${EVENTS}` } }
]
const RESOURCES_LINKS = [
  { title: 'Annual Reports', to: { path: `/${RESOURCES}`, hash: `#${REPORTS}` } },
  { title: 'Archived Sermons', to: { path: `/${RESOURCES}`, hash: `#${ARCHIVES}` } },
  { title: 'Past Salter Newsletters', to: { path: `/${RESOURCES}`, hash: `#${SALTER}` } },
  { title: 'Useful Links', to: { path: `/${RESOURCES}`, hash: `#${LINKS}` } }
]
const ABOUT_LINKS = [
  { title: 'History', to: { path: `/${ABOUT}`, hash: `#${HISTORY}` } },
  { title: 'Contact Us', to: { path: `/${ABOUT}`, hash: `#${CONTACT}` } },
  { title: 'Location', to: { path: `/${ABOUT}`, hash: `#${LOCATION}` } }
]

export const HOME_VIEW = { name: HOME, display: 'Home', to: '/', links: HOME_LINKS }
export const SUNDAYS_VIEW = { name: SUNDAYS, display: 'Sundays', to: `/${SUNDAYS}`, links: SUNDAYS_LINKS }
export const MINISTRIES_VIEW = { name: MINISTRIES, display: 'Ministries', to: `/${MINISTRIES}`, links: MINISTRIES_LINKS }
export const GET_INVOLVED_VIEW = { name: GET_INVOLVED, display: 'Get Involved', to: `/${GET_INVOLVED}`, links: GET_INVOLVED_LINKS }
export const EVENTS_VIEW = { name: EVENTS, display: 'Events', to: `/${EVENTS}`, links: EVENTS_LINKS }
export const RESOURCES_VIEW = { name: RESOURCES, display: 'Resources', to: `/${RESOURCES}`, links: RESOURCES_LINKS }
export const ABOUT_VIEW = { name: ABOUT, display: 'About', to: `/${ABOUT}`, links: ABOUT_LINKS }

export const LIST_NAMES = [MESSAGES_LIST_NAME, EVENTS_LIST_NAME, RESOURCES_LIST_NAME, ACTIVITIES_LIST_NAME]
export const VIEW_NAMES = [HOME_VIEW.name, SUNDAYS_VIEW.name, MINISTRIES_VIEW.name, GET_INVOLVED_VIEW.name, EVENTS_VIEW.name, RESOURCES_VIEW.name, ABOUT_VIEW.name]
export const TOP_NAVIGATION = [HOME_VIEW, SUNDAYS_VIEW, MINISTRIES_VIEW, GET_INVOLVED_VIEW, EVENTS_VIEW, RESOURCES_VIEW, ABOUT_VIEW]
