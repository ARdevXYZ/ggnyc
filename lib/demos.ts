export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'About GGNYC',
    items: [
      {
        name: 'About',
        slug: 'about',
        description: 'About Green Green NYC',
      },
      {
        name: 'Guiding Principles',
        slug: 'principles',
        description: 'Learn about the principles that guide GG NYC',
      },
    ],
  },
  {
    name: 'Connect',
    items: [
      {
        name: 'Contact',
        slug: 'contact',
        description: 'Contact information for Green Green NYC',
      },
      {
        name: 'Take Action',
        slug: 'take-action',
        description: 'Take action with GGNYC',
      },
    ],
  },
  // {
  //   name: 'GGNYC Initiatives',
  //   items: [
  //     {
  //       name: 'Initiative 1',
  //       slug: 'initiative-1',
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //     },
  //     {
  //       name: 'Initiative 2',
  //       slug: 'initiative-2',
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //     },
  //     {
  //       name: 'Initiative 3',
  //       slug: 'Initiative 3',
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //     },
  //   ],
  // },
];
