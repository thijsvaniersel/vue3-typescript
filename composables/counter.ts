import { ref, computed } from 'Vue'
import { useStore } from 'vuex'

// store
const store = useStore()

// data
// let counter = ref(0)
let counter = store.state.counter.counter

// computed
let counterPretty = computed(() => {
    return counter.value + ' lines'
})

// methods
let changeCounter = (int) => {
    if(counter.value == 0 && int == -1){
        return
    }
    
    counter.value = counter.value+int
}

export const useCounter = () => {
    return { 
        counter, 
        counterPretty,
        changeCounter
    }
}

