export const finishScreenData = {
  merci: {
    miniTitle: "Merci",
    Title: "Merci de nous avoir contactés",
    icon: "fa-thumbs-up",
    content: (
      <>
        <p className="text">
          Un membre de l'équipe Green Energy Company vous contactera très
          bientôt.
        </p>
        <div className="actions flex-center g-15">
          <a href="/">
            <button className="primary-btn flex-center g-10">
              <span>Retour à l'accueil</span>
              <i className="fa-solid fa-angle-right flex-center-center" />
            </button>
          </a>
        </div>
      </>
    ),
  },
  notFound: {
    miniTitle: "Erreur 404",
    Title: "Désolé, nous ne pouvons pas trouver cette page.",
    icon: "fa-triangle-exclamation",
    content: (
      <div className="actions flex-center g-15">
        <span className="text">Remettons-vous sur la bonne voie&nbsp;!</span>
        <a href="/">
          <button className="primary-btn flex-center g-10">
            <span>Accéder à la page d'accueil</span>
            <i className="fa-solid fa-angle-right flex-center-center" />
          </button>
        </a>
      </div>
    ),
  },
};
