<template>
    <label :for="name" class=" block font-normal 
    text-orange-50 w-sm mb-2">
        {{ name }}

        <input :id="name" :name="name" :type="type" :placeholder="placeholder" :value="modelValue" @input="updateValue"
            class=" border-b-2 focus:outline-none bg-tranparent px-2 py-1 rounded w-full" />
    </label>
</template>

<script setup>
const props = defineProps({
    modelValue: String,
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String
})

const emit = defineEmits(['update:modelValue'])

function updateValue(event) {
    emit('update:modelValue', event.target.value)
}
</script>
