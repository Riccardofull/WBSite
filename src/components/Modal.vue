<template>
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-50 bg-opacity-75 transition-opacity" aria-hidden="true" />
            <div class="max-w-5xl h-full inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6">
                <Overview :image="image" @closeModal="closeModal"/>
            </div>
        </div>
    </div>
</template>

<script>
import Overview from "../components/Overview.vue";
import ClickOutside from "vue-click-outside";

export default {
    name: "Modal",
    components: { Overview },
    props: {
        image: { 
            type: Object, 
            required: true
        }
    },
    methods: {
        closeModal(){
            this.$emit("closeModal");
        }
    },
    directives: {
        ClickOutside
    }
}
</script>