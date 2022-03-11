import { createSelector } from "reselect";

export const getNames = (state) => state.name.categories

export const namesSelector = createSelector(
    [getNames],
    (categories) => {
        if (categories) {
            let arr = []
            for (let i =0; i<categories.length; i++){
                if(arr.indexOf(categories[i].name) === -1){
                    arr = [...arr, categories[i].name]
                }
            }
            return arr
        } else {
            return []
        }
    }
)