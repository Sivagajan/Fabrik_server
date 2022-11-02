import jwt from 'jsonwebtoken'

export const createToken = (claims) => {
    const token = jwt.sign(claims, process.env.JWT_SECRET,{expiresIn: '1h'})
    return token
}

export const verifyToken = (token) => {
    console.log('token.js', token)
    const result = jwt.verify(token, process.env.JWT_SECRET)
    return result
}