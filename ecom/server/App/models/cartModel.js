let mongoose = require("mongoose")
let cartSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, //Obejct Id Men ->Object Id
            ref: 'user'
        },
        productNameId: String,
        productName: String,
        productPrice: Number,
        productQty: Number,
        productImage: String,
    }
)
let cartModel = mongoose.model("cart", cartSchema)
module.exports = { cartModel }