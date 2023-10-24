import Head from "next/head";
import "next/image";

import { Avatar, Box, Grid, Typography } from "@mui/material";
import { CategoryCard } from "../components/CategoryCard";
import { CategoryIcon } from "../components/CategoryIcon";

export default function Home() {
  return (
    <Box>
      <CategoryIcon />
    </Box>
  );
}
