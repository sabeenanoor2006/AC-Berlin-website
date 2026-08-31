document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     MOBILE MENU
     ========================================= */

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

      const isOpen = mainNav.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", String(isOpen));

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );

      menuToggle.textContent = isOpen ? "×" : "☰";

    });


    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
          "aria-label",
          "Open menu"
        );

        menuToggle.textContent = "☰";

      });

    });

  }


  /* =========================================
     TRANSLATIONS
     ========================================= */

  const translations = {

    /* =======================================
       GERMAN
       ======================================= */

    de: {

      /* Navigation */

      navSports: "Sportangebote",
      navTraining: "Training",
      navNews: "News",
      navPortraits: "Portraits",
      navInformation: "Information",


      /* Homepage Hero */

      heroEyebrow: "Hellersdorfer Athletik-Club Berlin e.V.",

      heroTitle:
        "Sport verbindet Menschen.",

      heroText:
        "Willkommen beim AC-BERLIN. Entdecke Sport, finde dein Training und werde Teil unserer Gemeinschaft in Berlin – Wuhletal, Bezirk Marzahn-Hellersdorf.",

      heroSportsButton:
        "Sport entdecken",

      heroJoinButton:
        "Mitmachen",

      heroLanguageNote:
        "Deutsch · English · weitere Sprachen auf Anfrage",

      heroCardLabel:
        "NEU IN BERLIN? AC-BERLIN FÜR DICH UND ALLE",

      heroCardTitle:
        "Sport verbindet Menschen.",

      heroCardText:
        "Wir bieten spezielle Sportangebote, insbesondere für Menschen mit Flucht- oder Migrationshintergrund.",

      heroCardLink:
        "Sportangebote entdecken →",


      /* Intro */

      introEyebrow:
        "AC-BERLIN",

      introTitle:
        "Ein Verein. Viele Menschen. Gemeinsam aktiv.",

      introText:
        "Unsere neue Website soll den Zugang zum Sport einfacher machen. Du sollst schnell sehen, welche Sportarten angeboten werden, wann trainiert wird, wen du kontaktieren kannst und wie du Mitglied wirst.",


      /* Sports */

      sportsEyebrow:
        "SPORTANGEBOT",

      sportsTitle:
        "Finde deinen Sport",

      sportsIntro:
        "Der AC-BERLIN bietet besondere, unterstützende Sportangebote für Menschen mit Flucht- und Migrationshintergrund.",

      athleticsTitle:
        "Leichtathletik",

      athleticsDescription:
        "Sportangebot für Erwachsene.",

      cricketTitle:
        "Cricket",

      cricketDescription:
        "Angebote für Erwachsene sowie Kinder und Jugendliche bis 16 Jahre.",

      tabataTitle:
        "Tabata",

      tabataDescription:
        "Sportangebot für Erwachsene ab 18 Jahren.",

      danceTitle:
        "Tanzen",

      danceDescription:
        "Sportangebot für Kinder und Jugendliche von 6 bis 18 Jahren.",

      footballTitle:
        "Fußball",

      footballDescription:
        "Sportangebot für Kinder und Jugendliche bis 16 Jahre.",

      samboTitle:
        "Sambo",

      samboDescription:
        "Sportangebot mit unterstützender Betreuung.",

      trainingLabel:
        "Training",

      coachLabel:
        "Trainer",

      coachFemaleLabel:
        "Trainerin",

      moreInformation:
        "Mehr Informationen →",

      sportsSeeMore:
        "Sportangebote ansehen →",


      /* News */

      newsEyebrow:
        "NEWS",

      newsTitle:
        "Aktuelles vom AC-BERLIN",

      newsIntro:
        "Neuigkeiten, Veranstaltungen und wichtige Informationen aus unserem Verein.",

      newsDate:
        "AC-BERLIN",

      newsCardTitle:
        "Neuigkeiten folgen",

      newsCardText:
        "Aktuelle Nachrichten, Veranstaltungen und Termine werden hier künftig veröffentlicht.",

      contactLink:
        "Kontakt aufnehmen →",


      /* Portraits */

      portraitsEyebrow:
        "PORTRAITS",

      portraitsTitle:
        "Menschen im AC-BERLIN",

      portraitsIntro:
        "Menschen, die den Verein gestalten und Sport miteinander möglich machen.",

      portraitAthlete:
        "ATHLET · AC-BERLIN",

      portraitAthleteText:
        "Seine sportliche Reise führte ihn von Aleppo über AC-BERLIN bis zu den Olympischen Spielen 2024 in Paris. 2026 gewann er Gold im Dreisprung bei den Deutschen Meisterschaften.",

      portraitBoard:
        "VEREINSVORSTAND",

      portraitBoardTitle:
        "Vorstand des AC-BERLIN",

      portraitBoardText:
        "Menschen, die sich für den Verein, seine Mitglieder und die Entwicklung des Sports engagieren.",

      portraitCoaches:
        "TRAINER · TRAINERINNEN",

      portraitCoachesTitle:
        "Unsere Trainerinnen & Trainer",

      portraitCoachesText:
        "Unsere Trainerinnen und Trainer begleiten die verschiedenen Sportgruppen und unterstützen unsere Mitglieder.",

      portrait:
        "PORTRAIT",


      /* Biography */

      biography1:
        "Mohammad Amin Alsalami kommt aus Syrien. Bis 2015 lebte er in Aleppo und war bereits ein erfolgreicher Weitspringer. Der Krieg zerstörte sein Leben, das Leben seiner Familie und das vieler Millionen Menschen in Syrien. Er musste sein Sportstudium abbrechen und floh über das Mittelmeer.",

      biography2:
        "In Deutschland suchte er einen Sportverein und fand den AC-BERLIN. Mit Unterstützung seines Trainers Lutz Kramer konnte er seine sportliche Entwicklung fortsetzen und gehört heute zu den besten Weit- und Dreispringern Deutschlands.",

      biography3:
        "Viele Freunde unterstützten ihn auf seinem Weg. 2023 wurde er in das IOC Refugee Team aufgenommen. Sein bisher größter sportlicher Erfolg war die Teilnahme an den Olympischen Spielen 2024 in Paris, wo er im Weitsprung antrat.",

      biography4:
        "2025 wurde er deutscher Staatsbürger. 2026 gewann er die Goldmedaille im Dreisprung bei den Deutschen Leichtathletik-Meisterschaften.",

      biography5:
        "Mohammad ist heute ein Vorbild für viele Menschen mit Flucht- und Migrationshintergrund in Deutschland.",

      biography6:
        "Nicht jeder schafft es bis zu den Olympischen Spielen. Aber Sport im AC-BERLIN ist für viele Menschen möglich. Der Verein bietet Sportangebote in verschiedenen Abteilungen und schafft Möglichkeiten für persönliche und sportliche Entwicklung.",


      /* Information */

      informationEyebrow:
        "INFORMATION",

      informationTitle:
        "Wichtiges auf einen Blick",

      informationIntro:
        "Informationen rund um den Verein, das Training und die Teilnahme an unseren Sportangeboten.",

      informationWho:
        "Für wen?",

      informationWhoText:
        "Unsere Sportangebote richten sich an Kinder, Jugendliche und Erwachsene. Besonders Menschen mit Flucht- und Migrationshintergrund sind willkommen.",

      informationWhere:
        "Wo?",

      informationWhereText:
        "Unsere Trainings finden an verschiedenen Sportstätten in Berlin statt. Die jeweiligen Orte findest du bei den Sportangeboten.",

      informationQuestions:
        "Fragen?",

      informationQuestionsText:
        "Du möchtest mehr über eine Sportart oder das Training erfahren? Nimm einfach Kontakt mit uns auf.",


      /* Join */

      joinEyebrow:
        "MITMACHEN",

      joinTitle:
        "So kommst du zum Sport",

      joinIntro:
        "Du möchtest mitmachen? Wähle eine Sportart und nimm einfach Kontakt mit uns auf.",

      joinStep1:
        "Sport auswählen",

      joinStep1Text:
        "Finde eine Sportart, die zu dir passt.",

      joinStep2:
        "Training anschauen",

      joinStep2Text:
        "Prüfe Trainingszeit und Trainingsort.",

      joinStep3:
        "Kontakt aufnehmen",

      joinStep3Text:
        "Schreib dem zuständigen Ansprechpartner.",

      joinStep4:
        "Ausprobieren",

      joinStep4Text:
        "Komm zum Training und lerne die Gruppe kennen.",


      /* Contact */

      contactEyebrow:
        "KONTAKT",

      contactTitle:
        "Wir helfen dir, den richtigen Sport zu finden.",

      contactAddress:
        "Hellersdorfer Athletik Club Berlin e.V.",

      contactLocation:
        "Stadion Wuhletal",

      contactButton:
        "Kontakt aufnehmen",


      /* Footer */

      footerTagline:
        "Sport verbindet Menschen.",

      footerLegal:
        "© 2026 AC-BERLIN · Impressum · Datenschutz",


      /* =======================================
         TRAINING PAGE
         ======================================= */

      trainingHeroEyebrow:
        "Hellersdorfer Athletik-Club Berlin e.V.",

      trainingHeroTitle:
        "Training & Trainingszeiten",

      trainingHeroText:
        "Hier findest du Trainingszeiten, Trainingsorte, Ansprechpartner und weitere Informationen zu unseren Sportangeboten.",

      trainingHeroCardTitle:
        "Sport verbindet Menschen.",

      trainingHeroCardText:
        "Unsere Sportangebote stehen Menschen mit unterschiedlichen Hintergründen offen.",

      trainingHeroCardLink:
        "Sportangebote ansehen →",

      trainingEyebrow:
        "TRAINING",

      trainingTitle:
        "Trainingszeiten & Orte",

      trainingIntro:
        "Die folgenden Angebote richten sich besonders an Menschen mit Flucht- und Migrationshintergrund.",

      tabataAge:
        "Für Erwachsene ab 18 Jahren",

      danceAge:
        "Für Kinder und Jugendliche von 6 bis 18 Jahren",

      athleticsAge:
        "Für Erwachsene",

      cricketAge:
        "Für Erwachsene sowie Kinder und Jugendliche",

      footballAge:
        "Für Kinder und Jugendliche bis 16 Jahre",

      judoSamboDepartment:
        "Judo & Sambo Abteilung",

      coachContactLabel:
        "Trainer / Ansprechpartner",

      languagesLabel:
        "Sprachen",

      samboContact:
        "Kontakt Sambo",

      trainingTimesPlaces:
        "Trainingszeiten & Orte",

      trainingTimesPlace:
        "Trainingszeiten & Ort",

      monday:
        "Montag",

      tuesday:
        "Dienstag",

      wednesday:
        "Mittwoch",

      thursday:
        "Donnerstag",

      friday:
        "Freitag",

      saturday:
        "Sonnabend",

      saturdayShort:
        "Samstag",

      sunday:
        "Sonntag",

      aprilOctober:
        "April–Oktober",

      novemberMarch:
        "November–März",

      womenTime:
        "Frauen · 09:00–15:00 Uhr",

      menTime:
        "Männer · 09:00–20:00 Uhr",

      youthTime:
        "Kinder/Jugendliche bis 16 · 11:00–13:00 Uhr",

      locationLabel:
        "Ort",

      groupsLabel:
        "Gruppen",

      groupsText:
        "Sambo 1: Kinder + Jugendliche<br>Sambo 2: Erwachsene / Combat",

      moreInformationText:
        "Entdecke unsere Sportangebote und erfahre mehr über den Verein.",

      backToSports:
        "Zurück zu den Sportangeboten",

      footerSlogan:
        "Sport verbindet Menschen."

    },


    /* =======================================
       ENGLISH
       ======================================= */

    en: {

      /* Navigation */

      navSports:
        "Sports",

      navTraining:
        "Training",

      navNews:
        "News",

      navPortraits:
        "Portraits",

      navInformation:
        "Information",


      /* Homepage Hero */

      heroEyebrow:
        "Hellersdorfer Athletik-Club Berlin e.V.",

      heroTitle:
        "Sport brings people together.",

      heroText:
        "Welcome to AC-BERLIN. Discover sports, find your training group and become part of our community in Berlin – Wuhletal, Marzahn-Hellersdorf.",

      heroSportsButton:
        "Discover sports",

      heroJoinButton:
        "Join us",

      heroLanguageNote:
        "German · English · other languages on request",

      heroCardLabel:
        "NEW IN BERLIN? AC-BERLIN FOR YOU AND EVERYONE",

      heroCardTitle:
        "Sport brings people together.",

      heroCardText:
        "We offer special sports programs, particularly for people with refugee and migrant backgrounds.",

      heroCardLink:
        "Discover sports programs →",


      /* Intro */

      introEyebrow:
        "AC-BERLIN",

      introTitle:
        "One club. Many people. Active together.",

      introText:
        "Our new website is designed to make access to sport easier. You can quickly see which sports are offered, when training takes place, who to contact and how to become a member.",


      /* Sports */

      sportsEyebrow:
        "SPORTS PROGRAMS",

      sportsTitle:
        "Find your sport",

      sportsIntro:
        "AC-BERLIN offers special and supportive sports programs for people with refugee and migrant backgrounds.",

      athleticsTitle:
        "Athletics",

      athleticsDescription:
        "Sports program for adults.",

      cricketTitle:
        "Cricket",

      cricketDescription:
        "Programs for adults as well as children and young people up to 16 years.",

      tabataTitle:
        "Tabata",

      tabataDescription:
        "Sports program for adults aged 18 and over.",

      danceTitle:
        "Dancing",

      danceDescription:
        "Sports program for children and young people aged 6 to 18.",

      footballTitle:
        "Football",

      footballDescription:
        "Sports program for children and young people up to 16 years.",

      samboTitle:
        "Sambo",

      samboDescription:
        "Sports program with supportive coaching.",

      trainingLabel:
        "Training",

      coachLabel:
        "Coach",

      coachFemaleLabel:
        "Coach",

      moreInformation:
        "More information →",

      sportsSeeMore:
        "View sports programs →",


      /* News */

      newsEyebrow:
        "NEWS",

      newsTitle:
        "Latest from AC-BERLIN",

      newsIntro:
        "News, events and important information from our club.",

      newsDate:
        "AC-BERLIN",

      newsCardTitle:
        "News coming soon",

      newsCardText:
        "Current news, events and dates will be published here in the future.",

      contactLink:
        "Contact us →",


      /* Portraits */

      portraitsEyebrow:
        "PORTRAITS",

      portraitsTitle:
        "People at AC-BERLIN",

      portraitsIntro:
        "People who shape the club and make sport possible together.",

      portraitAthlete:
        "ATHLETE · AC-BERLIN",

      portraitAthleteText:
        "His sporting journey took him from Aleppo through AC-BERLIN to the 2024 Olympic Games in Paris. In 2026, he won gold in the triple jump at the German Championships.",

      portraitBoard:
        "CLUB BOARD",

      portraitBoardTitle:
        "AC-BERLIN Club Board",

      portraitBoardText:
        "People who are committed to the club, its members and the development of sport.",

      portraitCoaches:
        "COACHES",

      portraitCoachesTitle:
        "Our Coaches",

      portraitCoachesText:
        "Our coaches support the different sports groups and help our members develop.",

      portrait:
        "PORTRAIT",


      /* Biography */

      biography1:
        "Mohammad Amin Alsalami comes from Syria. Until 2015, he lived in Aleppo and was already a successful long jumper. The war destroyed his life, his family's life and the lives of millions of people in Syria. He had to abandon his sports studies and fled across the Mediterranean.",

      biography2:
        "In Germany, he was looking for a sports club and found AC-BERLIN. With the support of his coach Lutz Kramer, he was able to continue his sporting development and is now one of Germany's leading long and triple jumpers.",

      biography3:
        "Many friends supported him on his journey. In 2023, he was selected for the IOC Refugee Team. His greatest sporting achievement so far was competing at the 2024 Olympic Games in Paris in the long jump.",

      biography4:
        "In 2025, he became a German citizen. In 2026, he won the gold medal in the triple jump at the German Athletics Championships.",

      biography5:
        "Today, Mohammad is a role model for many people with refugee and migrant backgrounds in Germany.",

      biography6:
        "Not everyone will make it to the Olympic Games. But sport at AC-BERLIN is possible for many people. The club offers sports programs in different departments and creates opportunities for personal and sporting development.",


      /* Information */

      informationEyebrow:
        "INFORMATION",

      informationTitle:
        "Important information at a glance",

      informationIntro:
        "Information about the club, training and participation in our sports programs.",

      informationWho:
        "Who can join?",

      informationWhoText:
        "Our sports programs are open to children, young people and adults. People with refugee and migrant backgrounds are especially welcome.",

      informationWhere:
        "Where?",

      informationWhereText:
        "Our training sessions take place at different sports facilities in Berlin. You can find the relevant locations in the sports programs.",

      informationQuestions:
        "Questions?",

      informationQuestionsText:
        "Would you like to know more about a sport or training? Simply get in touch with us.",


      /* Join */

      joinEyebrow:
        "JOIN US",

      joinTitle:
        "How to get started",

      joinIntro:
        "Would you like to join? Choose a sport and simply get in touch with us.",

      joinStep1:
        "Choose a sport",

      joinStep1Text:
        "Find a sport that suits you.",

      joinStep2:
        "Check the training",

      joinStep2Text:
        "Check the training time and location.",

      joinStep3:
        "Get in touch",

      joinStep3Text:
        "Contact the person responsible for the sport.",

      joinStep4:
        "Give it a try",

      joinStep4Text:
        "Come to training and get to know the group.",


      /* Contact */

      contactEyebrow:
        "CONTACT",

      contactTitle:
        "We can help you find the right sport.",

      contactAddress:
        "Hellersdorfer Athletik Club Berlin e.V.",

      contactLocation:
        "Wuhletal Stadium",

      contactButton:
        "Contact us",


      /* Footer */

      footerTagline:
        "Sport brings people together.",

      footerLegal:
        "© 2026 AC-BERLIN · Legal notice · Privacy",


      /* =======================================
         TRAINING PAGE
         ======================================= */

      trainingHeroEyebrow:
        "Hellersdorfer Athletik-Club Berlin e.V.",

      trainingHeroTitle:
        "Training & Training Times",

      trainingHeroText:
        "Here you can find training times, locations, contacts and further information about our sports activities.",

      trainingHeroCardTitle:
        "Sport brings people together.",

      trainingHeroCardText:
        "Our sports activities are open to people from different backgrounds.",

      trainingHeroCardLink:
        "View sports activities →",

      trainingEyebrow:
        "TRAINING",

      trainingTitle:
        "Training times & locations",

      trainingIntro:
        "The following activities are especially intended to support people with refugee and migrant backgrounds.",

      tabataAge:
        "For adults aged 18 and over",

      danceAge:
        "For children and young people aged 6 to 18",

      athleticsAge:
        "For adults",

      cricketAge:
        "For adults, children and young people",

      footballAge:
        "For children and young people up to 16",

      judoSamboDepartment:
        "Judo & Sambo Department",

      coachContactLabel:
        "Coach / Contact",

      languagesLabel:
        "Languages",

      samboContact:
        "Sambo contact",

      trainingTimesPlaces:
        "Training times & locations",

      trainingTimesPlace:
        "Training times & location",

      monday:
        "Monday",

      tuesday:
        "Tuesday",

      wednesday:
        "Wednesday",

      thursday:
        "Thursday",

      friday:
        "Friday",

      saturday:
        "Saturday",

      saturdayShort:
        "Saturday",

      sunday:
        "Sunday",

      aprilOctober:
        "April–October",

      novemberMarch:
        "November–March",

      womenTime:
        "Women · 9:00 am–3:00 pm",

      menTime:
        "Men · 9:00 am–8:00 pm",

      youthTime:
        "Children/young people up to 16 · 11:00 am–1:00 pm",

      locationLabel:
        "Location",

      groupsLabel:
        "Groups",

      groupsText:
        "Sambo 1: Children + young people<br>Sambo 2: Adults / Combat",

      moreInformationText:
        "Discover our sports activities and learn more about the club.",

      backToSports:
        "Back to sports",

      footerSlogan:
        "Sport brings people together."

    }

  };


  /* =========================================
     APPLY LANGUAGE
     ========================================= */

  function setLanguage(language) {

    const t = translations[language];

    if (!t) {
      return;
    }

    document.documentElement.lang = language;


    /* -----------------------------------------
       Translate data-i18n elements
       ----------------------------------------- */

    document.querySelectorAll("[data-i18n]").forEach((element) => {

      const key = element.getAttribute("data-i18n");

      if (Object.prototype.hasOwnProperty.call(t, key)) {

        /*
         * groupsText contains <br>.
         * All other translations use plain text.
         */

        if (key === "groupsText") {
          element.innerHTML = t[key];
        } else {
          element.textContent = t[key];
        }

      }

    });


    /* -----------------------------------------
       Update language button
       ----------------------------------------- */

    const languageButton =
      document.getElementById("languageButton");

    if (languageButton) {

      languageButton.textContent =
        language === "de" ? "EN" : "DE";

      languageButton.setAttribute(
        "aria-label",
        language === "de"
          ? "Switch to English"
          : "Auf Deutsch wechseln"
      );

    }


    /* -----------------------------------------
       Save selected language
       ----------------------------------------- */

    localStorage.setItem(
      "acBerlinLanguage",
      language
    );

  }


  /* =========================================
     LANGUAGE BUTTON
     ========================================= */

  const languageButton =
    document.getElementById("languageButton");

  if (languageButton) {

    languageButton.addEventListener("click", () => {

      const currentLanguage =
        document.documentElement.lang || "de";

      const newLanguage =
        currentLanguage === "de"
          ? "en"
          : "de";

      setLanguage(newLanguage);

    });

  }


  /* =========================================
     INITIAL LANGUAGE
     ========================================= */

  const savedLanguage =
    localStorage.getItem("acBerlinLanguage");

  if (savedLanguage === "en" || savedLanguage === "de") {

    setLanguage(savedLanguage);

  } else {

    setLanguage(
      document.documentElement.lang === "en"
        ? "en"
        : "de"
    );

  }

});
