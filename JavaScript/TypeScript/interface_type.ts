interface userInterface { //create new interface
    name: string
    age: number
}
type user = { //create new type
    name: string
    age: number
}
interface userInterface { //assign new key to interface
    dob: number,

}
interface newUser extends userInterface { // create new interface with the help of existing
    city: string
}
type newUser2 = user & { // create new type with the help of existing
    city: string
}

const userData: newUser = { //eg of interface
    name: "avijesh",
    age: 3,
    city: "",
    dob: 0
}
const userData2: newUser2 = { // eg of type
    name: "avueb",
    age: 3,
    city: 'h'
}
// we can't create same name type again if we already have,
// we can create new interface with the same name and can add the new key over there,
// we can't assign the new data type into the existing created interface keys,
//we can assign the new data to the existing key of type,
// we can create new interface with the help of extends 
// we can also create new type with type with the help of old type and that can perform from the intersaection.