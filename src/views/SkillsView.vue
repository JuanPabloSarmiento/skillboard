<template>
    <div class="min-h-screen flex items-center justify-center bg-transparent">
        <form @submit.prevent="addSkill" class="bg-stone-700 p-6 rounded shadow w-full max-w-md space-y-4">
            <!-- Input de nombre de habilidad -->
            <InputS id="añadirHabilidad" name="Añade habilidad" placeholder="Vue, Tailwind, etc..."
                v-model="skillName" />

            <!-- Input de nivel -->
            <div>

                <InputS id="skillLevel" type="number" name="puntuacion" min="0" max="5"
                    class="border px-2 py-1 rounded w-full" />
                <p v-if="invalidLevel" class="text-red-500 text-sm mt-1">
                    El nivel debe estar entre 0 y 5.
                </p>
            </div>

            <!-- Botón de envío -->
            <button type="submit"
                class="w-full bg-orange-500 text-white py-2  hover:bg-orange-700 rounded-2xl transition">
                {{ editingIndex !== null ? 'Actualizar habilidad' : 'Añadir habilidad' }}
            </button>

            <!-- Lista de habilidades -->
            <div v-if="skills.length" class="mt-6 space-y-2">
                <h2 class="text-lg font-semibold">Habilidades:</h2>
                <ul class="space-y-2">
                    <li v-for="(skill, index) in skills" :key="index"
                        class="flex justify-between items-center bg-gray-50 px-4 py-2 rounded">
                        <div>{{ skill.name }} - Nivel: {{ skill.level }}</div>
                        <div class="space-x-2">
                        </div>
                    </li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import InputS from '@/components/InputS.vue'

const skillName = ref('')
const skillLevel = ref(0)
const skills = ref([])
const editingIndex = ref(null)

const invalidLevel = computed(() => skillLevel.value < 0 || skillLevel.value > 5)

function addSkill() {
    if (invalidLevel.value || !skillName.value.trim()) return

    const newSkill = {
        name: skillName.value.trim(),
        level: skillLevel.value
    }

    if (editingIndex.value !== null) {
        skills.value[editingIndex.value] = newSkill
        editingIndex.value = null
    } else {
        skills.value.push(newSkill)
    }

    skillName.value = ''
    skillLevel.value = 0
}

function editSkill(index) {
    const skill = skills.value[index]
    skillName.value = skill.name
    skillLevel.value = skill.level
    editingIndex.value = index
}

function removeSkill(index) {
    skills.value.splice(index, 1)
    if (editingIndex.value === index) {
        skillName.value = ''
        skillLevel.value = 0
        editingIndex.value = null
    }
}
</script>
