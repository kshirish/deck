import React from 'react';

import Text from '../components/Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {},
};

export const TextBodyTiny = () => (
  <Text.TextBody tiny>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur
    officia repellat fugit impedit natus sint, doloribus facere assumenda odio
    quidem, perspiciatis deserunt ea officiis cupiditate laborum ducimus,
    accusantium animi.
  </Text.TextBody>
);

export const TextBodySmall = () => (
  <Text.TextBody small>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur
    officia repellat fugit impedit natus sint, doloribus facere assumenda odio
    quidem, perspiciatis deserunt ea officiis cupiditate laborum ducimus,
    accusantium animi.
  </Text.TextBody>
);

export const TextBody = () => (
  <Text.TextBody>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consectetur
    officia repellat fugit impedit natus sint, doloribus facere assumenda odio
    quidem, perspiciatis deserunt ea officiis cupiditate laborum ducimus,
    accusantium animi.
  </Text.TextBody>
);

export const TextHeading1 = () => (
  <>
    <Text.TextHeading weight={300} level={1}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
    <Text.TextHeading level={1}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
  </>
);

export const TextHeading2 = () => (
  <>
    <Text.TextHeading weight={300} level={2}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
    <Text.TextHeading level={2}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
  </>
);

export const TextHeading3 = () => (
  <>
    <Text.TextHeading weight={300} level={3}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
    <Text.TextHeading level={3}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
  </>
);

export const TextHeading4 = () => (
  <>
    <Text.TextHeading weight={300} level={4}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
    <Text.TextHeading level={4}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
  </>
);

export const TextHeading5 = () => (
  <>
    <Text.TextHeading weight={300} level={5}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
    <Text.TextHeading level={5}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
  </>
);

export const TextHeading6 = () => (
  <>
    <Text.TextHeading weight={300} level={6}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
    <Text.TextHeading level={6}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
    <Text.TextHeading weight={500} level={6}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
    <Text.TextHeading weight={600} level={6}>
      Join the Flickr community, home to tens of billions of photos and 2
      million groups.
    </Text.TextHeading>
  </>
);

export const TextSuper = () => (
  <Text.TextSuper>Find your inspiration.</Text.TextSuper>
);
