import React from 'react';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
};

export const Primary = () => <Button>Hello World</Button>;

export const Secondary = () => <Button type="secondary">Hello World</Button>;

export const Disabled = () => (
  <>
    <Button disabled>Hello World</Button>
    <Button type="secondary" disabled>
      Hello World
    </Button>
    <Button type="outline" disabled>
      Hello World
    </Button>
  </>
);

export const Block = () => (
  <>
    <Button block>Hello World</Button>
    <Button type="secondary" block>
      Hello World
    </Button>
  </>
);

export const Sizes = () => (
  <>
    <Button size="tiny">Hello World</Button>
    <Button size="small">Hello World</Button>
    <Button size="medium">Hello World</Button>
    <Button size="large">Hello World</Button>
    <Button size="huge">Hello World</Button>

    <br />

    <Button type="secondary" size="tiny">
      Hello World
    </Button>
    <Button type="secondary" size="small">
      Hello World
    </Button>
    <Button type="secondary" size="medium">
      Hello World
    </Button>
    <Button type="secondary" size="large">
      Hello World
    </Button>
    <Button type="secondary" size="huge">
      Hello World
    </Button>
  </>
);

export const Colored = () => (
  <>
    <Button color="red">Hello World</Button>
    <Button color="orange">Hello World</Button>
    <Button color="yellow">Hello World</Button>
    <Button color="olive">Hello World</Button>
    <Button color="green">Hello World</Button>
    <Button color="teal">Hello World</Button>
    <Button color="blue">Hello World</Button>
    <Button color="violet">Hello World</Button>
    <Button color="pink">Hello World</Button>
    <Button color="brown">Hello World</Button>
    <Button color="grey">Hello World</Button>
    <Button color="black">Hello World</Button>
  </>
);

export const Outlined = () => (
  <>
    <Button type="outline" color="red">
      Hello World
    </Button>
    <Button type="outline" color="orange">
      Hello World
    </Button>
    <Button type="outline" color="yellow">
      Hello World
    </Button>
    <Button type="outline" color="olive">
      Hello World
    </Button>
    <Button type="outline" color="green">
      Hello World
    </Button>
    <Button type="outline" color="teal">
      Hello World
    </Button>
    <Button type="outline" color="blue">
      Hello World
    </Button>
    <Button type="outline" color="violet">
      Hello World
    </Button>
    <Button type="outline" color="pink">
      Hello World
    </Button>
    <Button type="outline" color="brown">
      Hello World
    </Button>
    <Button type="outline" color="grey">
      Hello World
    </Button>
    <Button type="outline" color="black">
      Hello World
    </Button>
  </>
);

export const IconButton = () => {
  const favoriteIcon = (
    <img
      src="https://image.flaticon.com/icons/svg/148/148841.svg"
      alt="Favorite"
    />
  );

  const playIcon = (
    <img src="https://image.flaticon.com/icons/svg/148/148744.svg" alt="Play" />
  );

  const markerIcon = (
    <img
      src="https://image.flaticon.com/icons/svg/148/148845.svg"
      alt="Marker"
    />
  );
  return (
    <>
      <Button iconPosition="right" icon={favoriteIcon}>
        Favorite
      </Button>
      <Button type="secondary" iconPosition="left" icon={playIcon}>
        Play
      </Button>

      <Button type="outline" iconPosition="left" icon={markerIcon}>
        Marker
      </Button>
    </>
  );
};
