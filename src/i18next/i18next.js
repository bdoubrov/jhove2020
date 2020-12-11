/* eslint-disable quote-props */
/* eslint-disable quotes */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Action: 'Action',
      Tool: 'Tool',
      YourFile: 'Your File',
      FromUrl: 'From Url',
      Validate: 'Validate',
      Characterize: 'Characterize',
      Options: 'Options',
      Execute: 'Execute',
      OutputFolder: 'Output Folder',
      DropzoneTitle: 'Click to select or drop here',
      DropzoneSubtitle: 'Support for a single file or folder',
      Tools: 'Tools',
      About: 'About',
      mainPage: 'Main Page',
      defaultTool: 'Default Tool',
      Loading: 'Loading...',
      DerivedFrom:
        'Derived from software Copyright 2004-2011 by the President and Fellows of Harvard College.',
      GNULicense: 'Released under the GNU Lesser General Public License.',
      Release: 'Release: {{date}}',
      outOfDate: 'Your version is out of date.',
      Update: 'Update',
      latestVersion: 'to the latest version',
      SelectFolder: 'Select folder',
      noDefaultTools: 'No default tools for choosen action',
      fileNotChoosen: 'Choose file to see available actions',
      fileNotChoosenSub: 'You have not choosen any files to proccess',
    },
  },
  fr: {
    translation: {
      Action: 'Action',
      Tool: 'Outil',
      YourFile: 'Votre dossier',
      FromUrl: "De l'URL",
      Validate: 'Valider',
      Characterize: 'Caractériser',
      Options: 'Options',
      Execute: 'Exécuter',
      OutputFolder: 'Dossier de sortie',
      DropzoneTitle: 'Cliquez pour sélectionner ou déposer ici',
      DropzoneSubtitle: "Prise en charge d'un seul fichier ou dossier",
      Tools: 'Outils',
      About: 'À propos',
      mainPage: "Page D'accueil",
      defaultTool: 'Outil par défaut',
      Loading: 'Chargement...',
      DerivedFrom:
        'Dérivé du logiciel Copyright 2004-2011 par le Président et les Fellows du Harvard College.',
      GNULicense: 'Publié sous la licence publique générale limitée GNU.',
      Release: 'Libération: {{date}}',
      outOfDate: 'Votre version est obsolète.',
      Update: 'Mise à jour',
      latestVersion: 'à la dernière version',
      SelectFolder: 'Sélectionner le dossier',
      noDefaultTools: `Pas d'outils par défaut pour l'action choisie`,
      fileNotChoosen: 'Choisissez un fichier pour voir les actions disponibles',
      fileNotChoosenSub: "Vous n'avez choisi aucun fichier à traiter",
    },
  },
  ru: {
    translation: {
      Action: 'Действие',
      Tool: 'Инструмент',
      YourFile: 'Ваш файл',
      FromUrl: 'url ссылка',
      Validate: 'Проверить',
      Characterize: 'Характеризовать',
      Options: 'Опции',
      Execute: 'Запустить',
      OutputFolder: 'Папка вывода',
      DropzoneTitle: 'Нажмите или скиньте файлы сюда',
      DropzoneSubtitle: 'Поддерживает файл или сборник файлов',
      Tools: 'Инструменты',
      About: 'О нас',
      mainPage: 'Главная Страница',
      defaultTool: 'Инструмент по умолчанию',
      Loading: 'Загрузка...',
      DerivedFrom: `Создано на основе программного обеспечения, с авторскими правами 2004–2011 гг, 
      принадлежащими президенту и научным сотрудникам Гарвардского колледжа.`,
      GNULicense: 'Выпущено под Стандартной общественной лицензией ограниченного применения GNU.',
      Release: 'Версия: {{date}}',
      outOfDate: 'Ваша версия устарела.',
      Update: 'Обновить',
      latestVersion: 'до последней версии',
      SelectFolder: 'Выберите папку',
      noDefaultTools: 'Нет подходящих инструментов',
      fileNotChoosen: 'Выберите файл, чтобы увидеть подходящие экшены',
      fileNotChoosenSub: 'Вы не выбрали файл для обработки',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
