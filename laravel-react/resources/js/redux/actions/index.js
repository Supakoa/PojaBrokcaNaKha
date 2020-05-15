import { string } from "prop-types"

export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = (number) => {
    return {
        type: 'DECREMENT',
        payload: number
    }
}

export const user = (obj) => {
    return {
        type: 'USER',
        firstName: obj.firstName,
        lastName: obj.lastName,
        studentId:obj.studentId,
        email:obj.mail,
        faculty:obj.facId,
        major:obj.majorId
    }
}

export const postLogin = (user) =>{
    return{

    }
}
