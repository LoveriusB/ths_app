import { ExpoitedBy } from './sections/privacyPolicySections/ExpoitedBy';
import { CollectedData } from './sections/privacyPolicySections/CollectedData';
import { WhyDataCollected } from './sections/privacyPolicySections/WhyDataCollected';
import { Cookies } from './sections/privacyPolicySections/Cookies';
import { WhereStored } from './sections/privacyPolicySections/WhereStored';
import { KeptHowLong } from './sections/privacyPolicySections/KeptHowLong';
import { SharedWithWho } from './sections/privacyPolicySections/SharedWithWho';
import { RightsOverData } from './sections/privacyPolicySections/RightsOverData';
import { ForWho } from './sections/privacyPolicySections/ForWho';
import { Update } from './sections/privacyPolicySections/Update';
import { useState } from 'react';

export const PrivacyPolicySections = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <>
      <ExpoitedBy expanded={expanded} setExpanded={setExpanded} />
      <CollectedData expanded={expanded} setExpanded={setExpanded} />
      <WhyDataCollected expanded={expanded} setExpanded={setExpanded} />
      <Cookies expanded={expanded} setExpanded={setExpanded} />
      <WhereStored expanded={expanded} setExpanded={setExpanded} />
      <KeptHowLong expanded={expanded} setExpanded={setExpanded} />
      <SharedWithWho expanded={expanded} setExpanded={setExpanded} />
      <RightsOverData expanded={expanded} setExpanded={setExpanded} />
      <ForWho expanded={expanded} setExpanded={setExpanded} />
      <Update expanded={expanded} setExpanded={setExpanded} />
    </>
  );
};
