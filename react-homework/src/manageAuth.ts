import db, { IUsers } from './db'

export const registerUser = async (
    { username, password }: IUsers,
    cb: () => void
) => {
    try {
        const user = await db.users.get({ username })
        if(user) {
            throw new Error('username already existed')
        }
        await db.users.add({ username, password })
        console.log('User registered successfully')
        cb()
    } catch (error) {
        alert(error)
    }
}

export const getUser = async (user: IUsers) => {
    try {
        const data = await db.users.get(user)
        return data
    } catch (error) {
        console.log('Cannot get data', error)
    }
}
