const hbs = require('hbs');



//HELPERS
hbs.registerHelper('getAnio', () => new Date().getFullYear());
