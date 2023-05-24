import React from 'react';
import NextImage from 'common/components/NextImage';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import Fade from 'react-reveal/Fade';

import { FeatureTwoWrapper } from './featureTwo.style';

import { FEATURE_TWO_DATA } from 'common/data/SassMinimal';

import FeatureTwoMoc from 'common/assets/image/sassMinimal/feature-22.png';

const FeatureTwoSection = () => {
  return (
    <FeatureTwoWrapper>
      <Container>
        <Box className="row">
          <Box className="column">
            <Box className="blockTitle">
              <Text as="p" content="Gestione todos sus recursos" />
              <Heading
                as="h2"
                content="Mantenga el control de su negocio"
              />
            </Box>
            <Box className="featureTwoContent">
              {FEATURE_TWO_DATA.map((feature, index) => (
                <Box className="featureTwoBox" key={`feature-two-${index}`}>
                  <NextImage height={80} width={80} src={feature.image} alt="feature box image" />
                  <Heading as="h3" content={feature.title} />
                  <Text as="p" content={feature.content} />
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="column">
            <Fade right>
              <NextImage src={FeatureTwoMoc} alt="feature two moc" />
            </Fade>
          </Box>
        </Box>
      </Container>
    </FeatureTwoWrapper>
  );
};

export default FeatureTwoSection;
