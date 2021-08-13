import Vue from 'vue'
import {
  LIST_NAMES,
  POSTS_LIST_NAME,
  SERVICES_LIST_NAME,
  EVENTS_LIST_NAME,
  HOME_VIEW,
  TOP_NAVIGATION,
  VIEW_NAMES,
  EVENTS_VIEW,
  ABOUT_VIEW,
  SUNDAYS_VIEW
} from '~/constants'
export const MENU_TOGGLED_ACTION = 'MENU_TOGGLED_ACTION'
export const DATA_IS_LOADING_ACTION = 'DATA_IS_LOADING_ACTION'
export const DATA_DONE_LOADING_ACTION = 'DATA_DONE_LOADING_ACTION'
export const SELECTED_ITEM_ACTION = 'SELECTED_ITEM_ACTION'
export const VIEW_LOADED_ACTION = 'VIEW_LOADED_ACTION'

const SET_MENU_TOGGLED_MUTATION = 'SET_MENU_TOGGLED_MUTATION'
const SET_LOADING_MUTATION = 'SET_LOADING_MUTATION'
const SET_SELECTED_ITEM_MUTATION = 'SET_SELECTED_ITEM_MUTATION'
const SET_LIST_ITEMS_MUTATION = 'SET_LIST_ITEMS_MUTATION'

export const state = () => ({
  [POSTS_LIST_NAME]: [],
  loading: false,
  menuToggled: false,
  selectedItem: {},
  navigationItems: TOP_NAVIGATION
})

export const actions = {
  [MENU_TOGGLED_ACTION] ({ commit }) {
    commit(SET_MENU_TOGGLED_MUTATION)
  },
  [DATA_IS_LOADING_ACTION] ({ commit }) {
    commit(SET_LOADING_MUTATION, true)
  },
  [DATA_DONE_LOADING_ACTION] ({ commit }) {
    commit(SET_LOADING_MUTATION, false)
  },
  [SELECTED_ITEM_ACTION] ({ commit }, { item, itemType, router }) {
    commit(SET_SELECTED_ITEM_MUTATION, item)
    router.push(`/${itemType}/${item.slug}`)
  },
  async [VIEW_LOADED_ACTION] ({ state, commit }, { viewName, nuxtContent }) {
    if (!VIEW_NAMES.includes(viewName)) {
      throw new Error('Attempted to load an unknown view: ' + viewName)
    }
    if (viewName === POSTS_LIST_NAME.name) {
      const posts = state[POSTS_LIST_NAME].length ? state[POSTS_LIST_NAME] : await listContentQuery(POSTS_LIST_NAME, nuxtContent)
      commit(SET_LIST_ITEMS_MUTATION, { listName: POSTS_LIST_NAME, listContent: posts })
    }
    if (viewName === EVENTS_VIEW.name) {
      const events = state[EVENTS_LIST_NAME].length ? state[EVENTS_LIST_NAME] : await listContentQuery(EVENTS_LIST_NAME, nuxtContent)
      commit(SET_LIST_ITEMS_MUTATION, { listName: EVENTS_LIST_NAME, listContent: events })
    }
    if (viewName === SERVICES_LIST_NAME.name) {
      const services = state[SERVICES_LIST_NAME].length ? state[SERVICES_LIST_NAME] : await listContentQuery(SERVICES_LIST_NAME, nuxtContent)
      commit(SET_LIST_ITEMS_MUTATION, { listName: SERVICES_LIST_NAME, listContent: services })
    }
    if (viewName === HOME_VIEW.name) {
      // TODO query nuxtcontent for stuff for homepage
    }
    if (viewName === ABOUT_VIEW.name) {
      // TODO query nuxtcontent for stuff ONLY for About
    }
    if (viewName === SUNDAYS_VIEW.name) {
      // TODO query nuxtcontent for stuff ONLY for Sundays
    }
  }
}

export const mutations = {
  [SET_MENU_TOGGLED_MUTATION] (state) {
    Vue.set(state, 'menuToggled', !state.menuToggled)
  },
  [SET_LOADING_MUTATION] (state, isLoading) {
    Vue.set(state, 'loading', isLoading)
  },
  [SET_LIST_ITEMS_MUTATION] (state, { listName, listContent }) {
    Vue.set(state, `${listName}`, listContent)
  },
  [SET_SELECTED_ITEM_MUTATION] (state, item) {
    Vue.set(state, 'selectedItem', item)
  }
}
export const getters = {}

async function listContentQuery (listName, nuxtContent) {
  if (!LIST_NAMES.includes(listName)) {
    throw new Error('Attempted to load an unknown content list: ' + listName)
  }
  return await nuxtContent(listName).fetch()
}
