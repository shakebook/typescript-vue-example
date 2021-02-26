import { Module } from "vuex";
import { RootState } from "../types";
import { AboutState } from "./types";
import { mutations } from './mutations'

export const about: Module<AboutState, RootState> = {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations,
  // actions: {},
  // getters: {}
}