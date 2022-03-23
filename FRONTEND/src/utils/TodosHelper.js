export function ArrayFilterEqual(array, condition, value) {
    return array.filter((arr) => arr[condition] === value)
}

export function ArrayFilterDistinc(array, condition, value) {
    return array.filter((arr) => arr[condition] !== value)
}