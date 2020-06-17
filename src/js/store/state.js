/*  our innt state via localStorage */
export default {
    items: JSON.parse(localStorage.getItem('items') || '[]')
};