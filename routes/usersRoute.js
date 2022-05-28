var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const handleErrorAsync = require('../services/handleErrorAsync');

router.get('/', handleErrorAsync(usersController.get));

// 取得 -單筆
router.get('/:id', handleErrorAsync(usersController.getQuery));

// 新增
router.post('/', handleErrorAsync(usersController.create));

// 刪除 -全部
router.delete('/', handleErrorAsync(usersController.delete));

// 刪除 -單筆
router.delete('/:id', handleErrorAsync(usersController.deleteQuery));

// 編輯 -單筆
router.patch('/:id', handleErrorAsync(usersController.editQuery));

// 編輯 -單筆(重設密碼)
router.patch('/:id/resetPassword', handleErrorAsync(usersController.resetPassword));


module.exports = router;
