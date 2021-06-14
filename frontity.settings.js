const settings = {
  "name": "frontity-test",
  "state": {
    "frontity": {
      "url": "https://frontity-test.codemonkeynorth.co.uk",
      "title": "Frontity Test",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Events",
              "/events/"
            ],
            [
              "Blog",
              "/blog/"
            ]
            /*
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]*/
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          //"url": "https://test.frontity.org"
          url: "https://frontity-test-wp.codemonkeynorth.co.uk",
          "homepage": "/home",
          "postsPage": "/blog",
          params: {
            per_page: 2
          },
          postTypes: [
            {
              type: "event",
              endpoint: "event",
              archive: "events",              
            },
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
  ]
};

export default settings;
