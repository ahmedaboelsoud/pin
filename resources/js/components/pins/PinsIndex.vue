<template>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle ">
        <div class="flex place-content-end mb-12">
            <div class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                <router-link :to="{ name: 'pins.create' }" class="text-sm font-medium">Create PIN</router-link>
            </div>
        </div>

        <table class="min-w-full border divide-y divide-gray-200">
            <thead>
            <tr>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Name</span>
                </th>
            </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
            <template v-for="item in pins" :key="item.id">
                <tr class="bg-white">
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.name }}
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import usePins from "../../composables/pins";
import { onMounted } from "vue";
export default {
    setup() {
        const { pins, getPins, destroyPin } = usePins()
        onMounted(getPins)
        const deletePin = async (id) => {
            if (!window.confirm('Are you sure?')) {
                return
            }
            await destroyPin(id);
            await getPins();
        }
        return {
            pins,
            deletePin
        }
    }
}
</script>