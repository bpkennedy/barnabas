export const POSTS_LIST_NAME = 'messages'
export const EVENTS_LIST_NAME = 'events'
export const SERVICES_LIST_NAME = 'resources'

// Top level nav item names
export const HOME = 'home'
export const POSTS = 'posts'
export const EVENTS = 'events'
export const SUNDAYS = 'sundays'
export const MINISTRIES = 'ministries'
export const GET_INVOLVED = 'getinvolved'
export const RESOURCES = 'resources'
export const ABOUT = 'about'

// Sublevel nav link names
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

const SUNDAYS_LINKS = [
  { title: 'Services', to: { path: `/${SUNDAYS}/${SERVICES}` } },
  { title: 'Worship', to: { path: `/${SUNDAYS}/${WORSHIP}` } }
]
const MINISTRIES_LINKS = [
  { title: 'Adult Study Group', to: { path: `/${MINISTRIES}/${STUDY_GROUP}` } },
  { title: 'TEAM Food Drive', to: { path: `/${MINISTRIES}/${TEAM}` } },
  { title: 'Barundi Clean Water', to: { path: `/${MINISTRIES}/${BARUNDI}` } }
]
const GET_INVOLVED_LINKS = [
  { title: 'Serving Schedule', to: { path: `/${GET_INVOLVED}/${SERVING}` } },
  { title: 'Community Garden', to: { path: `/${GET_INVOLVED}/${GARDEN}` } },
  { title: 'Adult Choir', to: { path: `/${GET_INVOLVED}/${CHOIR}` } }
]
const RESOURCES_LINKS = [
  { title: 'Annual Reports', to: { path: `/${RESOURCES}/${REPORTS}` } },
  { title: 'Archived Sermons', to: { path: `/${RESOURCES}/${ARCHIVES}` } },
  { title: 'Past Salter Newsletters', to: { path: `/${RESOURCES}/${SALTER}` } },
  { title: 'Useful Links', to: { path: `/${RESOURCES}/${LINKS}` } }
]
const ABOUT_LINKS = [
  { title: 'History', to: { path: `/${ABOUT}/${HISTORY}` } },
  { title: 'Contact Us', to: { path: `/${ABOUT}/${CONTACT}` } },
  { title: 'Location', to: { path: `/${ABOUT}/${LOCATION}` } }
]

export const HOME_VIEW = { name: HOME, display: 'Home', to: '/', links: [] }
export const POSTS_VIEW = { name: POSTS, display: 'News', to: `/${POSTS}`, links: [] }
export const EVENTS_VIEW = { name: EVENTS, display: 'Events', to: `/${EVENTS}`, links: [] }
export const SUNDAYS_VIEW = { name: SUNDAYS, display: 'Sundays', to: `/${SUNDAYS}`, links: SUNDAYS_LINKS }
export const MINISTRIES_VIEW = { name: MINISTRIES, display: 'Ministries', to: `/${MINISTRIES}`, links: MINISTRIES_LINKS }
export const GET_INVOLVED_VIEW = { name: GET_INVOLVED, display: 'Get Involved', to: `/${GET_INVOLVED}`, links: GET_INVOLVED_LINKS }
export const RESOURCES_VIEW = { name: RESOURCES, display: 'Resources', to: `/${RESOURCES}`, links: RESOURCES_LINKS }
export const ABOUT_VIEW = { name: ABOUT, display: 'About', to: `/${ABOUT}`, links: ABOUT_LINKS }

export const LIST_NAMES = [POSTS_LIST_NAME, EVENTS_LIST_NAME, SERVICES_LIST_NAME]
export const VIEW_NAMES = [HOME_VIEW.name, SUNDAYS_VIEW.name, MINISTRIES_VIEW.name, GET_INVOLVED_VIEW.name, EVENTS_VIEW.name, RESOURCES_VIEW.name, ABOUT_VIEW.name]
export const TOP_NAVIGATION = [HOME_VIEW, POSTS_VIEW, EVENTS_VIEW, SUNDAYS_VIEW, MINISTRIES_VIEW, GET_INVOLVED_VIEW, RESOURCES_VIEW, ABOUT_VIEW]
