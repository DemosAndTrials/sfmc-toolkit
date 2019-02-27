const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const customActivityConfigSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    id: String,
    name: String,
    key: String,
    type: String,
    description: String,
    isConfigured: {
        type: Boolean,
        default: false
    },
    configOnDrop: {
        type: Boolean,
        default: false
    },
    editHeight: String,
    editWidth: String,
    useJwt: {
        type: Boolean,
        default: false
    },
    // TODO refactoring later
    steps: [String],
    splits: [String],
    schemaArgs: [String],
    // END TODO
    endpointUrl: String,
    editUrl: String,
    bigImageUrl: String,
    smallImageUrl: String,
});

mongoose.model('custom_activity_config', customActivityConfigSchema);