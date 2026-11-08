const en = {
  meta: {
    siteName: "Reef Supervisor",
    description:
      "Reef Supervisor makes it easy to track the water parameters of a reef aquarium from your phone or tablet (iOS, Android) and from your computer.",
    author: "Léo Bergerot",
  },
  nav: {
    home: "Home",
    account: "Account",
    aquariums: "Aquariums",
    measures: "Readings",
    history: "History",
    chart: "Chart",
    languages: "Language",
    french: "Français",
    english: "English",
    primary: "Pages",
  },
  actions: {
    app: "Application",
    source: "Source code",
    adopt: "I'll use it",
    close: "Close",
    read: "Read the explanation",
    related: "Other explanations",
    skip: "Skip to content",
  },
  footer: {
    openSource: "Open source application",
  },
  home: {
    seoTitle: "Application",
    title:
      "A free and open application for tracking water parameters in reef aquariums",
    lead:
      "For the health of your animals and effective care of your aquarium, tracking parameters is a key part of keeping the best water quality.",
    summary:
      "One account holds several aquariums. Each water reading has a date and a time. The dashboard shows the difference from the previous reading, the history lets you correct a mistake, and a chart shows the change between two dates. This site and the application are available in French and English.",
    prefooter:
      "A web app compatible with iOS and Android, your parameters are within reach!",
    slogan: "Manage easily your tank with Reef Supervisor",
    cards: [
      {
        topic: "aquariums",
        media: "multiple",
        title: "Several aquariums",
        text: "The application lets you manage several aquariums from the same account",
        alt: "Aquarium picker: two named tanks and the button to add another",
      },
      {
        topic: "mesures",
        media: "board",
        title: "Dashboard",
        text: "For each parameter, the application shows how it changed compared with the previous reading",
        alt: "Dashboard: latest values, dates, and the difference from the previous reading",
      },
      {
        topic: "aquariums",
        media: "switch",
        title: "Quick access to your other aquariums",
        text: "You open another aquarium's dashboard from the menu at the top right",
        alt: "Top-right menu: aquariums, language, and sign out",
      },
      {
        topic: "mesures",
        media: "add",
        title: "Add a reading",
        text: "Quickly add the latest reading, together with its date and time",
        alt: "Adding a dated reading from a parameter card",
      },
      {
        topic: "historique",
        media: "history",
        title: "Older readings",
        text: "The reading history lets you delete or edit an entry if it was typed wrong",
        alt: "History of a parameter's readings, used to edit or delete an entry",
      },
      {
        topic: "graphiques",
        media: "chart",
        title: "Charts",
        text: "You can filter measured values between two dates and chart how the parameters change",
        alt: "Chart of a parameter between two dates",
      },
    ],
  },
  topics: {
    compte: {
      seoTitle: "Account",
      title: "One account",
      lead: "All of your aquariums live on the same account. You open the application from a phone, an iOS or Android tablet, or a computer.",
      figures: [
        {
          media: "switch",
          alt: "Account menu at the top right: current aquarium, language, and sign out",
        },
      ],
      sections: [
        {
          title: "Where the account shows up",
          paragraphs: [
            "Once you are signed in, the menu at the top right shows the current aquarium. Sign out is there too.",
            "The same menu is where you choose the language: French or English.",
          ],
        },
      ],
    },
    aquariums: {
      seoTitle: "Aquariums",
      title: "Several aquariums",
      lead: "The application lets you manage several aquariums from the same account.",
      figures: [
        {
          media: "multiple",
          alt: "Aquarium choice screen, with a photo, a name, and the button to add one",
        },
        {
          media: "switch",
          alt: "Top-right menu used to switch from one aquarium to another",
        },
      ],
      sections: [
        {
          title: "Choosing an aquarium",
          paragraphs: [
            "Each aquarium has a name and can have a photo. The choice screen shows them side by side, with a button to add another one.",
            "You open an aquarium's dashboard from the menu at the top right. That menu also offers to manage the aquariums.",
          ],
        },
      ],
    },
    mesures: {
      seoTitle: "Readings",
      title: "Dated readings",
      lead: "Adding a reading is quick: you enter the latest value, together with its date and time.",
      figures: [
        {
          media: "board",
          alt: "Parameter cards with the value, the date, and the colored difference",
        },
        {
          media: "add",
          alt: "Entering a new reading, with its date and time",
        },
      ],
      sections: [
        {
          title: "The dashboard",
          paragraphs: [
            "Each parameter has its own card. The card shows the latest value, then the date and time of the reading.",
            "The pictures show, for example, calcium, alkalinity, magnesium, temperature, pH, and phosphate.",
          ],
        },
        {
          title: "The difference from the previous reading",
          paragraphs: [
            "For each parameter, the application shows how it changed compared with the previous reading.",
            "The difference is shown as a value and as a percentage. An increase is green, a decrease is red.",
          ],
        },
      ],
    },
    historique: {
      seoTitle: "History",
      title: "Older readings",
      lead: "The reading history lets you delete or edit an entry if it was typed wrong.",
      figures: [
        {
          media: "history",
          alt: "List of older readings for a parameter, with their dates",
        },
      ],
      sections: [
        {
          title: "Fix a mistake",
          paragraphs: [
            "The history lists the readings already saved for a parameter, with their value and their date.",
            "If a value or a date was entered wrong, you can edit that reading or delete it.",
          ],
        },
      ],
    },
    graphiques: {
      seoTitle: "Chart",
      title: "Charts",
      lead: "You can filter the measured values between two dates and chart how the parameters change.",
      figures: [
        {
          media: "chart",
          alt: "A parameter curve filtered between a start date and an end date",
        },
      ],
      sections: [
        {
          title: "Between two dates",
          paragraphs: [
            "You choose the start and the end of the period.",
            "The chart then shows how that parameter changed over the interval.",
          ],
        },
      ],
    },
  },
};

export default en;
