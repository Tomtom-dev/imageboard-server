'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "images",
    [
      {
        title: "Baby_Yoda",
        url: "https://static.autovisie.nl/VvfNfapecL3ZDCXGFm1jSMtED38=/768x271/filters:format(jpeg):quality(75)/https%3A%2F%2Fwww.manners.nl%2Fwp-content%2Fuploads%2F2020%2F01%2FLevensgrote-Baby-Yoda-The-Mandalorian-Star-Wars-front.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "BRO_BOCOP",
        url: "https://steamuserimages-a.akamaihd.net/ugc/576821369009282423/251A4B46EB936B1BDD549FDD5973FDCA43DA20D2/?imw=1024&imh=575&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    )},
  }

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("images", null,{})
  }

