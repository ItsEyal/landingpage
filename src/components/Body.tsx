import { VStack } from "@chakra-ui/react";
import CommunityPanel from "./Panels/CommunityPanel";
import EducationalPanel from "./Panels/EducationalPanel";
import RecipePanel from "./Panels/RecipePanel";
import RestaurantsPanel from "./Panels/ResterauntsPanel";
import WelcomePanel from "./Panels/WelcomePanel";
import WhatIsPanel from "./Panels/WhatIsPanel";

export default function Body({ onOpen, ...props }: { onOpen: () => void }) {
  return (
    <VStack w="100%" height="100%" p={0}>
      <WelcomePanel onOpen={onOpen} />
      <WhatIsPanel />
      <RecipePanel />
      <RestaurantsPanel />
      <CommunityPanel />
      <EducationalPanel />
    </VStack>
  );
}
