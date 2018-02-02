import * as Types from './Types'

export function setActiveTab(tab) {
    return {
        type: Types.activeTab,
        payload: tab
    }
}