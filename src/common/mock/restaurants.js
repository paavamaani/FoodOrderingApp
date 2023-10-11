import fetchMock from 'fetch-mock';

fetchMock.get('/api/restaurants', [
  {
    info: {
      id: '271483',
      name: 'Burger King',
      cloudinaryImageId: 'e33e1d3ba7d6b2bb0d45e1001b731fcf',
      locality: 'VR Mall',
      areaName: 'Krishnarajapura',
      costForTwo: '₹350 for two',
      cuisines: ['Burgers', 'American'],
      avgRating: 4.1,
      promoted: true,
      feeDetails: {
        restaurantId: '271483',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 7800,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 7800,
      },
      parentId: '166',
      avgRatingString: '4.1',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 38,
        lastMileTravel: 6.5,
        serviceability: 'SERVICEABLE',
        slaString: '38 mins',
        lastMileTravelString: '6.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-07 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'EVERY ITEM',
        subHeader: '@ ₹129',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/burger-king-vr-mall-krishnarajapura-bangalore-271483',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '341895',
      name: 'Burger Seigneur',
      cloudinaryImageId: 'k4z46joj5ozirqpyww1z',
      locality: 'Indiranagar',
      areaName: 'Indiranagar',
      costForTwo: '₹1300 for two',
      cuisines: ['American', 'Continental', 'Burgers', 'Beverages'],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: '341895',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 8500,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 8500,
      },
      parentId: '12095',
      avgRatingString: '4.3',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6.5,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '6.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-07 02:45:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/burger-seigneur-indiranagar-bangalore-341895',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '506323',
      name: 'Louis Burger',
      cloudinaryImageId: '19d3d352cc815b9d88b22617b41fa97b',
      locality: 'Siddapura',
      areaName: 'Whitefield',
      costForTwo: '₹600 for two',
      cuisines: ['Burgers', 'American', 'Fast Food'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '506323',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 7500,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 7500,
      },
      parentId: '22485',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '33 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-07 04:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/louis-burger-siddapura-whitefield-bangalore-506323',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '23680',
      name: "McDonald's",
      cloudinaryImageId: 'ee5f8e06b300efc07c9fe3f4df40dfc4',
      locality: 'Murgesh Pallya',
      areaName: 'Indiranagar',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: '23680',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5100,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5100,
      },
      parentId: '630',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 24,
        lastMileTravel: 4.8,
        serviceability: 'SERVICEABLE',
        slaString: '24 mins',
        lastMileTravelString: '4.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-07 03:45:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/mcdonalds-murgesh-pallya-indiranagar-bangalore-23680',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '79472',
      name: "Domino's Pizza",
      cloudinaryImageId: 'nkxgwtukusj6dnfbn8lr',
      locality: 'Munnekolalu',
      areaName: 'Marathahalli',
      costForTwo: '₹400 for two',
      cuisines: ['Pizzas', 'Italian', 'Pastas', 'Desserts'],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: '79472',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 3500,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 3500,
      },
      parentId: '2456',
      avgRatingString: '4.3',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 30,
        serviceability: 'SERVICEABLE',
        slaString: '30 mins',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-10-07 02:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹150 OFF',
        subHeader: 'ABOVE ₹299',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/dominos-pizza-munnekolalu-marathahalli-bangalore-79472',
      type: 'WEBLINK',
    },
  },
]);
