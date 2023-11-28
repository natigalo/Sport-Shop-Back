import mercadopago from 'mercadopago';

export default async (req, res, next) => {
    try {
        // Configura las credenciales de MercadoPago
        mercadopago.configure({
            access_token: process.env.MP_ACCESS_TOKEN,
        });
        // Crea una preferencia de pago
        console.log(req.body)
        const preference = {
            items:req.body
            
        
                // [{
                //     title: 'Producto 1',
                //     quantity: 3,
                //     currency_id: 'COP',
                //     unit_price: 2500,
                // },
                // {
                //     title: 'Producto 2',
                //     quantity: 3,
                //     currency_id: 'COP',
                //     unit_price: 26000,
                // },
                // ]
        };
        const result = await mercadopago.preferences.create(preference);
        console.log(result.response.init_point);
        // Redirige al usuario a la página de pago
        return res.status(201).send(result.response.init_point);
    } catch (error) {
        return next(error);
    }
};
