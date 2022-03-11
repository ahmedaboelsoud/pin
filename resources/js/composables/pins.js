import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function usePins() {
    const pins = ref([])
    const pin = ref([])
    const router = useRouter()
    const errors = ref('')

    const getPins = async () => {
        let response = await axios.get('/api/pins')
        pins.value = response.data.data;
    }

    const getPin = async (id) => {
        let response = await axios.get('/api/pins/' + id)
        pin.value = response.data.data;
    }

    const storePin = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/pins', data)
            await router.push({name: 'pins.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updatePin = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/pins/' + id, pin.value)
            await router.push({name: 'pins.index'})
        } catch (e) {
            if (e.response.status === 422) {
               errors.value = e.response.data.errors
            }
        }
    }

    const destroyPin = async (id) => {
        await axios.delete('/api/pins/' + id)
    }


    return {
        pins,
        pin,
        errors,
        getPins,
        getPin,
        storePin,
        updatePin,
        destroyPin
    }
} 