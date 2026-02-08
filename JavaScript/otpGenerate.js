function generateOTP(num) {
    let otp = ''
    for (let i = 0; i < num; i++) {
        otp += Math.floor(Math.random() * 10)
    }
    return otp
}
const otp = generateOTP(6) //otp length
console.log(otp)
