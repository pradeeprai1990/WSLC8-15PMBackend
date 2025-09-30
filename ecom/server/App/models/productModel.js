let mongoose = require("mongoose")
let productSchema = mongoose.Schema(
    {
        productName: {
            required: [true, 'category Name Is required'], //T-Shirts
            type: String,
            minLength: 2,
            maxLength: 30,
            unique: true,
        },
        parentCategory: { //Men
            type: mongoose.Schema.Types.ObjectId, //Obejct Id Men ->Object Id
            ref: 'category'
        },
        subCategory: { //Topwear
            type: mongoose.Schema.Types.ObjectId, //Obejct Id Men ->Object Id
            ref: 'subcategory'
        },
        subsubCategory: { //Topwear
            type: mongoose.Schema.Types.ObjectId, //Obejct Id Men ->Object Id
            ref: 'subsubcategory'
        },
        productMeterial: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'material'
            }
        ],
        productColor: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'color'
            }
        ],
        productType: {
            type: String,
            enum: ['Featured', 'New Arrivals', 'Onsale']
        },

        productImage: String,
        backImage: String,
        productGallery: Object,
        bestSelling: Boolean,
        topRated: Boolean,
        upSell: Boolean,
        actualPrice: Number,
        salePrice: Number,
        inStocks: Number,
        productOrder: Number,
        productDesc: String,
        productStatus: {
            type: Boolean,
            default: true
        }
    }
)
let productModel = mongoose.model("product", productSchema)
module.exports = { productModel }