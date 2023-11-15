const PI_DATA = 3.14

function add(a,b){
    console.log(a+b)
}
export{PI_DATA as PI,add}

export default function minus(a,b){
    console.log(a-b)
}
