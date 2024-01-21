export default function description(obj){
    let arr = [];
    obj.special.forEach((element) => {
        const { 
            id, name, icon, description = 'Описание недоступно', 
        } = element;
        arr.push({
            id, name, icon, description
        })
    });
    return arr;
}