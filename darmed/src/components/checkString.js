export const checkString = (object) =>{
    let re = /^[\d\+][\d\(\)\ -]{4,14}\d$/
    if (object.name == "")
        return false
    if ((object.phone == "") || (!re.test(object.phone)))
        return false
    return true
}