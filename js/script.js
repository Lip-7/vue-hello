const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Wellcome to Vue 3',
            inputMsg: 'Insert a url img to see it',
            imgUrl: './img/90378626-6967-4458-9b5b-fa7e053caa25.jpg',
            newImgUrl: ''
        }
    },
    methods: {
        changeImg() {
            if (this.newImgUrl) {
                this.imgUrl = this.newImgUrl
            }
        }
    }
}).mount('#app');