export const destinations = [
    {
      slug: "galle",
      name: "Galle",
      description:
        "A historic coastal city with a Dutch fort, where colonial architecture meets tropical beaches. Experience the perfect blend of history and coastal charm in this UNESCO World Heritage site.",
      shortDescription: "A historic coastal city with a Dutch fort",
      images: ["/galle/galle1.jpg", "/galle/galle2.jpg", "/galle/galle3.jpg"],
      travelTime: "2 hours from Colombo",
      flightCost: 180,
      vacationCost: {
        amount: 750,
        duration: "7 Days",
      },
      thingsToDo: [
        {
          name: "Galle Fort",
          description: "One of the oldest and well preserved colonial edifices on the island!",
          image: "/galle/thingstodo/fort.jpg",
          icon: "fort",
          distance: "18MIN RIDE FROM UNAWATUNA",
        },
        {
          name: "Jungle Beach",
          description: "A secluded paradise perfect for snorkeling and swimming",
          image: "/galle/thingstodo/beach.jpg",
          icon: "beach",
          distance: "25MIN RIDE FROM GALLE FORT",
        },
        {
          name: "Maritime Museum",
          description: "Discover the rich maritime heritage of Sri Lanka",
          image: "/galle/thingstodo/museum.jpg",
          icon: "museum",
          distance: "5MIN WALK FROM FORT ENTRANCE",
        },
      ],
      tourPlan: [
        {
          key: "historic-fort-exploration",
          title: "Historic Fort Exploration",
          description:
            "Begin your journey through time with a guided walk along the historic ramparts, visiting colonial buildings and learning about the fort's rich history.",
        },
        {
          key: "coastal-paradise",
          title: "Coastal Paradise",
          description:
            "Discover the pristine beaches of Unawatuna and Jungle Beach, perfect for swimming, snorkeling, and soaking in the tropical atmosphere.",
        },
        {
          key: "cultural-immersion",
          title: "Cultural Immersion",
          description:
            "Explore the Maritime Museum, local art galleries, and craft shops while experiencing the unique blend of Dutch-colonial and Sri Lankan culture.",
        },
      ],
    },
  ]
  
  