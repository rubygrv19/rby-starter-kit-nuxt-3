<script setup>
    import {
        LOV_DIVISION
    } from '@/public/data/lov/division.ts';

    const isError = ref(false);
    const isShowPassword = ref('password');
    const formLogin = ref({
        username: null,
        password: null,
        division: null,
        snackRequest: null
    });

    const listDivision = ref(LOV_DIVISION.result);

    const onTogglePassword = () => {
        isShowPassword.value = isShowPassword.value === 'password' ? 'text' : 'password';
    };

    // const getListDivision = async () => {
    //     const {
    //         data
    //     } = await useFetch('/api/lov/division');
    //     if (data.value.result.statusCode === 200) {
    //         listDivision.value = data.value.result;
    //     };
    // };
</script>

<template>
    <div>
        <div>
            <BaseInput type="text" v-model="formLogin.username" placeholder="e.g. : employeeiif" />
        </div>
        <div>
            <BaseInput :type="isShowPassword" v-model="formLogin.password" placeholder="Enter your password"
                :error="isError" errorType="danger"
                errorMessage="The password you entered is incorrect, please re-enter!" icon="/icons/eyes.svg"
                iconPosition="right" @iconOnClick="onTogglePassword()" />
        </div>
        <div>
            <BaseSelect v-model="formLogin.division" :lov="listDivision.data" />
        </div>
        <div>
            <BaseTextarea rows="4" v-model="formLogin.snackRequest" placeholder="Snack remarks"
                :error="isError" errorType="danger" errorMessage="Input your request, max 100 character" />
        </div>
        <div>
            <BaseButton type="button" label="Submit" class="w-full" />
        </div>
    </div>
</template>