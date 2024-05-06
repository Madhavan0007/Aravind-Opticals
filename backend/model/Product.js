const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Product_id:{
        type: Number, 
        required: 'This field is required.'
    },
    Image:{
        type: String, 
        required: 'This field is required.'
    },
    Price: {
        type: String, 
        required: 'This field is required.'
    },
    Brand_name:{
        type: String,
        required: 'This field is required.'
    },
    Category:{
        type: String,
        enum: ['Sunglass', 'Contact lens', 'Eyeglass'],
        required: 'This field is required.'
    },
    Gender: {
        type: String, 
        enum: ['Unisex', 'Men', 'Women']
    },
    Material: {
        type: String,
        required: 'This field is required.'
    },
    Frame_shape: String,
    Frame_type: {
        type: String,
        enum: ["Full rim", "Half rim", "Rimless"]
    },
    Frame_size: String,
    Frame_width: String,
    Frame_color: String,
    Glass_color: String,
    Prescription_type: String,
    Base_curve: String,
    Lens_diameter: String,
    Lens_color: String, 
    Water_content: String

});

module.exports = mongoose.model('Product', ProductSchema);