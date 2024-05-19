<script setup>
    definePageMeta({
        layout: 'auth'
    });

    const router = useIonRouter();

    const isLogin = useCookie('isLogin');

    const isError = ref(false);
    const isShowPassword = ref('password');

    const formLogin = ref({
        username: null,
        password: null
    });

    const goPageHome = () => {
        router.push('/');
    };

    const onTogglePassword = () => {
        isShowPassword.value = isShowPassword.value === 'password' ? 'text' : 'password';
    };

    const onLogin = () => {
        if (formLogin.value.username === 'admin' && formLogin.value.password === 'admin') {
            goPageHome();
            isLogin.value = true;
        } else {
            isError.value = true;
        }
    };
</script>

<template>
    <div class="flex justify-center md:items-center h-full">
        <div class="bg-white w-[600px] xs:p-[24px]">
            <div class="flex justify-center mb-[26px]">
                <img src="/logo-login.svg" alt="logo-login" />
            </div>
            <div class="text-center mb-[50px]">
                <div class="mb-2">
                    <div class="text-2xl text-[#000000] font-bold">
                        Welcome to GA Service Systems
                    </div>
                </div>
                <div>
                    <div class="text-base text-[#757575] font-normal">
                        Please log in using your AD account
                    </div>
                </div>
            </div>
            <div>
                <div class="mb-4">
                    <div class="mb-1">
                        <div class="text-base text-[#313131] font-normal">
                            Username
                            <span class="text-[#FF0000]">*</span>
                        </div>
                    </div>
                    <BaseInput
                        type="text"
                        v-model="formLogin.username"
                        placeholder="e.g. : employeeiif"
                    />
                </div>
                <div class="mb-6">
                    <div class="mb-1">
                        <div class="text-base text-[#313131] font-normal">
                            Password
                            <span class="text-[#FF0000]">*</span>
                        </div>
                    </div>
                    <BaseInput
                        :type="isShowPassword" 
                        v-model="formLogin.password"
                        placeholder="Enter your password"
                        :error="isError"
                        errorType="danger"
                        errorMessage="The password you entered is incorrect, please re-enter!"
                        icon="/icons/eyes.svg"
                        iconPosition="right"
                        @iconOnClick="onTogglePassword()"
                    />
                </div>
                <div>
                    <BaseButton
                        type="button"
                        label="Login"
                        :disabled="!formLogin.username || !formLogin.password"
                        @click="onLogin()"
                        class="w-full"
                    />
                </div>
            </div>
        </div>
    </div>
</template>