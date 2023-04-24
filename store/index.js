export const state = () => ({
  isSidebarOpen: false,
});

export const mutations = {
  toggleSidebar(state, shouldOpen) {
    state.isSidebarOpen = shouldOpen;
  },
};
