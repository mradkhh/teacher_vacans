const phoneFilter = (value: string) => {
    return value.replace(/ /g,'').replace(/_/g, '')
}

export default phoneFilter