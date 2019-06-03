import store from '@/store/'
export default function Initializer() {
    store.commit('initToken');
    store.dispatch('initAccount');
    // last step
}