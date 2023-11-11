import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        {/* Welcome to{' '} */}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'green' }}>
          Live It Baseball
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Formally known as ripping tits
        {/* <Anchor href="https://mantine.dev/guides/next/" size="lg">
          this guide
        </Anchor>
        . To get started edit page.tsx file. */}
      </Text>
    </>
  );
}
