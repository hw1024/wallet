// import { saveToLocal, loadFromLocal} from 'utils/localstorage';
const user = {
    state: {
        token: '',
        info: window.localStorage.getItem('UserData'),
        current: window.localStorage.getItem('UserCurrent')
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_INFO: (state, info) => {
            state.info = info;
        },
        SET_CURRENT: (state, current) => {
            state.current = current;
        }
    },
    actions: {
        // 更新当前状态
        currentUpdate({ commit, state }, data) {
            let current = window.localStorage.setItem('UserCurrent', data.current)
            commit('SET_CURRENT', current)
        },
        // 新增用户信息方法
        UserData({ commit, state }, data) {
            let storage = window.localStorage.getItem('UserData')
            storage = storage ? JSON.parse(storage) : []
            storage.push(data)
            let infos = window.localStorage.setItem('UserData', JSON.stringify(storage))
            commit('SET_INFO', infos)
        },
        //初始化获取用户信息方法
        UserInit({ commit, state }, data) {   
            if (window.localStorage.getItem('UserData')) {
                state.info = JSON.parse(window.localStorage.getItem('UserData'))
            }
            else state.info = ''
            if (window.localStorage.getItem('UserCurrent')) {
                state.current = JSON.parse(window.localStorage.getItem('UserCurrent'))
            }
            else state.current = ''
        },
        //  删除用户信息方法
        delData({ commit, state }, data) {
            let storage = JSON.parse(window.localStorage.getItem('UserData'))
            storage.splice(data.id, 1)
            let infos = window.localStorage.setItem('UserData', JSON.stringify(storage))
            commit('SET_INFO', infos)
        },
        //  更新钱包名方法
        updateData({ commit, state }, data) {
            let storage = JSON.parse(window.localStorage.getItem('UserData'))
            storage[data.id].name = data.name
            let infos = window.localStorage.setItem('UserData', JSON.stringify(storage))
            commit('SET_INFO', infos)
        },
        //  更新钱包keystore方法
        updateKeyData({ commit, state }, data) {
            let storage = JSON.parse(window.localStorage.getItem('UserData'))
            storage[data.id].keystore = data.keystore
            let infos = window.localStorage.setItem('UserData', JSON.stringify(storage))
            commit('SET_INFO', infos)
        },
    }
};
export default user;
