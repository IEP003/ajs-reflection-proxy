export default function description(obj){
    let arr = [];
    obj.special.forEach(element => {
        if(!element.description){
            element.description = 'Описание недоступно'
        }
        arr.push(element);
    });
    return arr;
}