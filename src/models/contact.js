import moongose from 'mongoose';

const contactSchema = new moongose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Contact = moongose.model('Contact', contactSchema);
export default Contact;