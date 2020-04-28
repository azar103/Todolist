const express = require('express')
const itemCtrl = require('../controllers/item')
const router = express.Router()

router.get('/', itemCtrl.getAllItems)
router.post('/', itemCtrl.createItem)
router.put('/:id', itemCtrl.editItem)
router.delete('/:id', itemCtrl.deleteItem)


module.exports = router