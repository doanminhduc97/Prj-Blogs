<template>
    <div class="modal">
        <div class="modal-content">
            <p class="modal-content">{{ modalMessage }}</p>
            <div class="button">
                <button @click="deletePost">Yes</button>
                <button @click="closeModal">No</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Modal",
    components: {

    },
    data() {
        return {
            
        }
    },
    props: {
        modalMessage: {
            type: String
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal');
        },
        deletePost () {
            this.$emit('delete-post');
        }
    },
}
</script>
<style lang="scss" scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);

    .modal-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 8px;
        padding: 40px 30px;
        background-color: #fff;
    }

    p {
        text-align: center;
    }
    .button {
        display: block;
        align-self: center;

        button {
            margin: 15px;
        }
    }
}
</style>