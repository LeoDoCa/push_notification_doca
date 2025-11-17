const admin = require('firebase-admin');

// Carga del archivo de credenciales del service account
const serviceAccount = require('./serviceAccountKey.json');

// Inicializar el SDK de Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// TODO: pega aquí el token FCM que te dio la app Flutter
const deviceToken = 'dbgY4JtsSlO1o9H60M5t38:APA91bGDYtzIAX6QySAslXLLd8MW2xf_yrDRBnj214nQRfm-mlRzwTStrldwgBZNYmWbfP9EECw5EMZvoq2FSy8L0xS_dIXIGLz5-qwvjQCBzIpfI3M-PkQ';

async function sendPush() {
  const message = {
    token: deviceToken,
    notification: {
      title: 'Hola desde Firebase Admin Leo',
      body: 'Este es un mensaje enviado con la API v1 de LeoDoCa',
    },

    data: {
      origen: 'node-demo',
      tipo: 'prueba',
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('Mensaje enviado correctamente:', response);
  } catch (error) {
    console.error('Error al enviar mensaje:', error);
  }
}

sendPush();
