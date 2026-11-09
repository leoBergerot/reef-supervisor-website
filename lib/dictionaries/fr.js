const fr = {
  meta: {
    siteName: "Reef Supervisor",
    description:
      "L'application Reef Supervisor permet de suivre facilement les paramètres de l'eau d'un aquarium récifal depuis votre téléphone ou tablette (iOS, Android) et aussi sur votre ordinateur",
    author: "Léo Bergerot",
  },
  nav: {
    home: "Accueil",
    account: "Compte",
    aquariums: "Aquariums",
    measures: "Mesures",
    history: "Historique",
    chart: "Graphique",
    languages: "Langue",
    french: "Français",
    english: "English",
    primary: "Pages",
  },
  actions: {
    app: "Application",
    source: "Code source",
    adopt: "Je l'adopte",
    close: "Fermer",
    read: "Lire l'explication",
    related: "Les autres explications",
    skip: "Aller au contenu",
  },
  footer: {
    openSource: "Open source application",
  },
  home: {
    seoTitle: "Application",
    title:
      "Application gratuite & ouverte pour le suivi des paramètres de l'eau des aquariums récifaux",
    lead:
      "Pour la bonne santé de vos animaux et une maintenance efficace de votre aquarium, le suivi des paramètres est un élément clé pour maintenir la meilleure qualité de l'eau",
    summary:
      "Un compte regroupe plusieurs aquariums. Chaque mesure d'eau porte une date et une heure. Le tableau de bord indique l'écart avec le relevé précédent, l'historique permet de corriger une saisie, et un graphique montre l'évolution entre deux dates. Le site et l'application se lisent en français et en anglais.",
    prefooter:
      "Application web Compatible iOS et Android, vos paramètres sont à portée de main !",
    slogan: "Manage easily your tank with Reef Supervisor",
    cards: [
      {
        topic: "aquariums",
        media: "multiple",
        title: "Gestion d'aquariums multiples",
        text: "L'application permet de gérer plusieurs aquariums au travers d'un même compte",
        alt: "Choix de l'aquarium : deux bacs nommés et le bouton pour en ajouter un",
      },
      {
        topic: "mesures",
        media: "board",
        title: "Tableau de bord",
        text: "Pour chacun des paramètres, l'application affiche son évolution par rapport à l'avant-dernier relevé",
        alt: "Tableau de bord : dernières valeurs, dates et écart avec le relevé précédent",
      },
      {
        topic: "aquariums",
        media: "switch",
        title: "Accès rapide aux autres aquariums",
        text: "L'accès au tableau de bord de vos aquariums s'effectue depuis le menu en haut à droite",
        alt: "Menu en haut à droite : aquariums, langue et déconnexion",
      },
      {
        topic: "mesures",
        media: "add",
        title: "Ajout d'une mesure",
        text: "Ajout facile et rapide de la dernière mesure effectuée ainsi que sa date et son heure",
        alt: "Ajout d'une mesure datée depuis une carte de paramètre",
      },
      {
        topic: "historique",
        media: "history",
        title: "Accès aux anciennes mesures",
        text: "Grâce à l'historique des mesures, vous pourrez en supprimer ou en éditer en cas d'erreur de saisie",
        alt: "Historique des mesures d'un paramètre, pour éditer ou supprimer une saisie",
      },
      {
        topic: "graphiques",
        media: "chart",
        title: "Graphiques",
        text: "Vous aurez la possibilité de filtrer les valeurs mesurées entre deux dates et d'afficher graphiquement l'évolution des paramètres",
        alt: "Graphique de l'évolution d'un paramètre entre deux dates",
      },
    ],
  },
  topics: {
    compte: {
      seoTitle: "Compte",
      title: "Un même compte",
      lead: "Tous vos aquariums sont regroupés dans un même compte. Vous ouvrez l'application depuis un téléphone, une tablette iOS ou Android, ou un ordinateur.",
      figures: [
        {
          media: "switch",
          alt: "Menu du compte en haut à droite : aquarium en cours, langue et déconnexion",
        },
      ],
      sections: [
        {
          title: "Où le compte apparaît",
          paragraphs: [
            "Une fois connecté, le menu en haut à droite indique l'aquarium en cours. C'est aussi là que se trouve la déconnexion.",
            "Le même menu propose le choix de la langue : français ou anglais.",
          ],
        },
      ],
    },
    aquariums: {
      seoTitle: "Aquariums",
      title: "Gestion d'aquariums multiples",
      lead: "L'application permet de gérer plusieurs aquariums au travers d'un même compte.",
      figures: [
        {
          media: "multiple",
          alt: "Écran de choix de l'aquarium, avec une photo, un nom et le bouton pour en ajouter un",
        },
        {
          media: "switch",
          alt: "Menu en haut à droite pour passer d'un aquarium à l'autre",
        },
      ],
      sections: [
        {
          title: "Choisir un aquarium",
          paragraphs: [
            "Chaque aquarium a un nom et peut avoir une photo. L'écran de choix les affiche côte à côte, avec un bouton pour en ajouter un.",
            "L'accès au tableau de bord de vos aquariums s'effectue depuis le menu en haut à droite. Ce menu propose aussi de gérer les aquariums.",
          ],
        },
      ],
    },
    mesures: {
      seoTitle: "Mesures",
      title: "Mesures datées",
      lead: "Ajout facile et rapide de la dernière mesure effectuée ainsi que sa date et son heure.",
      figures: [
        {
          media: "board",
          alt: "Cartes de paramètres avec la valeur, la date et l'écart coloré",
        },
        {
          media: "add",
          alt: "Saisie d'une nouvelle mesure, avec sa date et son heure",
        },
      ],
      sections: [
        {
          title: "Le tableau de bord",
          paragraphs: [
            "Chaque paramètre occupe une carte. Elle affiche la dernière valeur, puis la date et l'heure du relevé.",
            "Les illustrations montrent par exemple le calcium, l'alcalinité, le magnésium, la température, la dureté (pH) et le phosphate.",
          ],
        },
        {
          title: "L'écart avec le relevé précédent",
          paragraphs: [
            "Pour chacun des paramètres, l'application affiche son évolution par rapport à l'avant-dernier relevé.",
            "L'écart est indiqué en valeur et en pourcentage. Une hausse est en vert, une baisse en rouge.",
          ],
        },
      ],
    },
    historique: {
      seoTitle: "Historique",
      title: "Accès aux anciennes mesures",
      lead: "Grâce à l'historique des mesures, vous pourrez en supprimer ou en éditer en cas d'erreur de saisie.",
      figures: [
        {
          media: "history",
          alt: "Liste des anciennes mesures d'un paramètre, avec leur date",
        },
      ],
      sections: [
        {
          title: "Corriger une saisie",
          paragraphs: [
            "L'historique liste les relevés déjà enregistrés pour un paramètre, avec leur valeur et leur date.",
            "Si une valeur ou une date a été mal saisie, vous pouvez éditer ce relevé ou le supprimer.",
          ],
        },
      ],
    },
    graphiques: {
      seoTitle: "Graphique",
      title: "Graphiques",
      lead: "Vous aurez la possibilité de filtrer les valeurs mesurées entre deux dates et d'afficher graphiquement l'évolution des paramètres.",
      figures: [
        {
          media: "chart",
          alt: "Courbe d'un paramètre filtrée entre une date de début et une date de fin",
        },
      ],
      sections: [
        {
          title: "Entre deux dates",
          paragraphs: [
            "Vous choisissez le début et la fin de la période.",
            "Le graphique montre alors comment le paramètre a évolué sur cet intervalle.",
          ],
        },
      ],
    },
  },
};

export default fr;
