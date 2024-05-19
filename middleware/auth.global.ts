export default defineNuxtRouteMiddleware((to, from) => {
    const router = useIonRouter();

    const isLogin = useCookie('isLogin');

    if (to.fullPath !== '/auth/login' && !isLogin.value) {
        router.push('/auth/login');
    };

    if (to.fullPath === '/auth/login' && isLogin.value) {
        router.push('/');
    };
});