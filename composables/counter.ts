import { ref, computed } from 'Vue'

// data
let counter = ref(0)

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

