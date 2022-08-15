const Jimp = require("jimp");

const path = require("path");
const fs = require("fs/promises");

const { User } = require("../../models/user");

const setAvatar = async (req, res) => {
  try {
    // path: '...\nodejs-homework-rest-api\\temp\\example1.jpg'
    // originalname: 'example1.jpg'
    const { path: tempPath, originalname } = req.file;

    await Jimp.read(tempPath).then((image) => {image.resize(250, 250).writeAsync(tempPath)});

    const { _id } = req.user;

    // ...\nodejs-homework-rest-api\public\avatar
    const avatarDir = path.join(__dirname, "../", "../", "public", "avatars");
    
    // ...\nodejs-homework-rest-api\public\avatar\{_id}_example1.jpg
    const uploadPath = path.join(avatarDir, `${_id}_${originalname}`);
    
    await fs.rename(tempPath, uploadPath);
    
    // avatars\{_id}_example1.jpg
    const avatarURL = path.join("avatars", `${_id}_${originalname}`);

    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = setAvatar;
