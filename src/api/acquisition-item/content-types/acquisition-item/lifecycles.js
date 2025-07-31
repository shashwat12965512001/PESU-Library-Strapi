module.exports = {
    async beforeCreate(event) {
        const data = event.params.data;
        if (data.unit_price && data.quantity) {
            data.total_cost = data.unit_price * data.quantity;
        }
    },

    async beforeUpdate(event) {
        const data = event.params.data;
        if (data.unit_price && data.quantity) {
            data.total_cost = data.unit_price * data.quantity;
        }
    },
};  