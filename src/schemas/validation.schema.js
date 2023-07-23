import { z } from 'zod';

export const taxonomiaEsquema = z.object(
    {
        reino: z.string({
            required_error: 'Reino requerido'
        }).regex(/^[A-Za-z\s]+$/, {
            message: 'El Reino debe contener solo letras.',
        }),

        filo: z.string({
            required_error: 'Filo requerido'
        }).regex(/^[A-Za-z\s]+$/, {
            message: 'El Filo debe contener solo letras.',
        }),

        clase: z.string({
            required_error: 'Clase requerida'
        }).regex(/^[A-Za-z\s]+$/, {
            message: 'La Clase debe contener solo letras.',
        }),

        orden: z.string({
            required_error: 'Orden requerido'
        }).regex(/^[A-Za-z\s]+$/, {
            message: 'El Orden debe contener solo letras.',
        }),

        familia: z.string({
            required_error: 'Familia requerida'
        }).regex(/^[A-Za-z\s]+$/, {
            message: 'La Familia debe contener solo letras.',
        }),
        genero: z.string({
            required_error: 'Genero requerido'
        }).regex(/^[A-Z][a-z]*$/, {
            message: 'El Genero debe empezar con mayúscula y contener solo letras.',
        }),
        especie: z.string({
            required_error: 'Especie requerida'
        }).regex(/^[a-z]+$/, {
            message: 'La Especie debe contener solo letras en minúscula.',
        })
    });

export const usuarioEsquema = z.object({
    nombre: z.string({
        required_error: 'Nombre requerido',
    }),

    usuario: z.string({
        required_error: 'Usuario requerido',
    }), 

    email: z.string({
        required_error: 'Email requerido',
    })
    .email({message: "Email invalido"}), 

    contrasena: z.string({
        required_error: 'Contraseña requerida',
    }).regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{
        message: 'La contraseña debe tener mínimo 8 caracteres, 1 Letra Mayuscula, Numeros y símbolos ( @$!%*?& )'
    })
});

export const loginEsquema = z.object({
    email: z.string({
        required_error: 'Email requerido',
    })
    .email({message: "Email invalido"}), 

    contrasena: z.string({
        required_error: 'Contraseña requerida',
    }).regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{
        message: 'La contraseña debe tener mínimo 8 caracteres y tener (1 Mayúscula, Números, Símbolos (@$!%*?&))'
    })
});


    // module.exports = {
    //     taxonomiaEsquema,
    //     usuarioEsquema,
    //     loginEsquema
    // }
