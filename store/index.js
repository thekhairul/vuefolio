export const state = () => ({
  isSidebarOpen: true,
});

export const mutations = {
  toggleSidebar(state) {
    state.isSidebarOpen = !state.isSidebarOpen;
  },
};
