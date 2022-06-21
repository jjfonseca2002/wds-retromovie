express
express-ejs-layouts
ejs
mongoose
body-parser (nos fascilita el trabajo de accesar al contenido de los elementos input de nuestros HTML desde nuestro servidor)
para instancearlo:
    const bodyParser = require('body-parser');
para usarlo:
    app.use(bodyParser.urlencoded({limit: '10mb', extended: false }));

nodemon
dotenv


