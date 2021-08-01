import Vue from 'vue'
export const MENU_TOGGLED_ACTION = 'MENU_TOGGLED_ACTION'
const DATA_IS_LOADING_ACTION = 'DATA_IS_LOADING_ACTION'
const DATA_DONE_LOADING_ACTION = 'DATA_DONE_LOADING_ACTION'

const SET_MENU_TOGGLED_MUTATION = 'SET_MENU_TOGGLED_MUTATION'
const SET_LOADING_MUTATION = 'SET_LOADING_MUTATION'

export const state = () => ({
  loading: false,
  menuToggled: false,
  topLinks: [{
    id: 1,
    title: 'I\'m New',
    links: [{
      id: 1,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 2,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 3,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 4,
      label: 'Google',
      to: 'https://www.google.com'
    }]
  }, {
    id: 2,
    title: 'Get Involved',
    links: [{
      id: 1,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 2,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 3,
      label: 'Google',
      to: 'https://www.google.com'
    }]
  }, {
    id: 3,
    title: 'Events',
    links: [{
      id: 1,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 2,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 3,
      label: 'Google',
      to: 'https://www.google.com'
    }]
  }, {
    id: 4,
    title: 'Resources',
    links: [{
      id: 1,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 2,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 3,
      label: 'Google',
      to: 'https://www.google.com'
    }]
  }, {
    id: 5,
    title: 'About',
    links: [{
      id: 1,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 2,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 3,
      label: 'Google',
      to: 'https://www.google.com'
    }]
  }, {
    id: 6,
    title: 'Sundays',
    links: [{
      id: 1,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 2,
      label: 'Google',
      to: 'https://www.google.com'
    }, {
      id: 3,
      label: 'Google',
      to: 'https://www.google.com'
    }]
  }]
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
  }
}

export const mutations = {
  [SET_MENU_TOGGLED_MUTATION] (state) {
    Vue.set(state, 'menuToggled', !state.menuToggled)
  }
}
export const getters = {}
