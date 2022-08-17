const {User} = require("../../models/user");
const {createError} = require("../../helpers");

const verifyEmail = async(req, res) => {
    const {verificationToken} = req.params;
    
    const user = await User.findOne({verificationToken});
    
    // пользователь либо не регистрировался либо уже подтвердил свою почту
    if(!user) {
        throw createError(404);
    }

    // верификация пройдена - verify: true
    // делаем ссылку для верификации не актуальной - verificationToken: ""
    await User.findByIdAndUpdate(user._id, {verify: true, verificationToken: ""});
    
    res.json({
        message: 'Verification successful'
    });
}

module.exports = verifyEmail;