export const contactScreenData = {
  contact: {
    secTitle: "Contactez-nous",
    mainTitle:
      "Comment pouvons-nous vous aider à passer à l'énergie solaire aujourd'hui?",
    parag: "Dites-nous qui vous êtes et ce que vous recherchez ci-dessous.",
    fields: [
      {
        label: "Nom",
        type: "text",
        name: "user_name",
        placeholder: "Votre nom",
        required: true,
      },
      {
        label: "Email",
        type: "email",
        name: "user_email",
        placeholder: "Votre email",
        required: true,
      },
      {
        label: "Téléphone",
        type: "text",
        name: "user_phone",
        placeholder: "Votre numéro de téléphone",
        required: true,
      },
      {
        label: "Message",
        type: "textarea",
        name: "message",
        placeholder: "Votre message",
        rows: 4,
        required: true,
      },
    ],
  },
  devis: {
    secTitle: "Demandez un Devis",
    mainTitle:
      "Passez à l'énergie solaire avec Trabelsi Service dès aujourd'hui!",
    parag:
      "Dites-nous qui vous êtes et les détails de votre projet ci-dessous.",
    fields: [
      {
        label: "Nom",
        type: "text",
        name: "user_name",
        placeholder: "Votre nom",
        required: true,
      },
      {
        label: "Email",
        type: "email",
        name: "user_email",
        placeholder: "Votre email",
        required: true,
      },
      {
        label: "Téléphone",
        type: "text",
        name: "user_phone",
        placeholder: "Votre numéro de téléphone",
        required: true,
      },
      {
        label: "Réf.STEG",
        type: "text",
        name: "ref_steg",
        placeholder: "Votre Référence STEG ",
        required: true,
      },
      {
        label: "Détails du projet",
        type: "textarea",
        name: "project_details",
        placeholder: "Décrivez votre projet solaire...",
        rows: 4,
        required: true,
      },
    ],
  },
};
