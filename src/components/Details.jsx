import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";

const Details = () => {
  const [details, setDetails] = useState([
    {
      detail: "About",
    },
  ]);
  const [current, setCurrent] = useState();
  return (
    <>
      <Tabs position="relative" variant="unstyled" color={"#b1e7d3"}>
        <TabList>
          <Tab fontSize={"18px"} className="animate-pulse" _selected={{ color: '#B006AF' }}>About</Tab>
          <Tab fontSize={"18px"} className="animate-pulse" _selected={{ color: '#B006AF' }}>Contact</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            s
          </TabPanel>
        </TabPanels>
       

      </Tabs>
    </>
  );
};

export default SectionWrapper(Details, "details");
