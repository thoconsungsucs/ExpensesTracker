export const caculatorChange = (type,value) => {
    return {
        type: `CUR_ITEM_${type}_CHANGE`,
        payload: value
    }
}