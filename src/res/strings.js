export default {
  common: {
    accept: 'Aceptar',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    save: 'Guardar',
    back: 'Regresar',
    close: 'Cerrar',
  },
  business: {
    add: 'Agregar',
    label: 'Nombre de la empresa',
    hint: 'Ej. Empresa 1',
    removeConfirmation: '¿Confirmas que deseas eliminar la empresa:\n',
  },
  code: {
    label: 'Ingresa el código alfanumérico enviado a tu correo electrónico.',
    hint: 'Código se seguridad',
    error: {
      422: 'Parámetro inválido, La version del SDK recibida no es válida.',
      400: 'Parámetro faltante.',
      404: 'El Código de activación no existe.',
      426: 'Sistema operativo no soportado.',
      410: 'Código de activación expirado.',
      409: 'El dispositivo ya se encuentra registrado.',
      200: 'Registro exitoso.',
      417: 'El usuario alcanzó el límite de dispositivos activos.',
      500: 'Error del sistema.',
      default: 'Hubo un error al validar el código.',
    },
  },
  token: {
    title: 'Esta es tu clave digital',
    description:
      'Es personal y puedes usarla para hacer tus transacciones en tu Banca Empresas.\n¡No la compartas con nadie!',
    copy: ' Copiar código',
    expires: ' Expira en ',
    see: 'Token',
  },
  menu: {
    edit: 'Editar nombre',
    delete: 'Eliminar',
  },
};
