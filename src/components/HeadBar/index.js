import {
  AppBar,
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { GiHospitalCross } from "react-icons/gi";
import React from "react";
import { headlinks } from "@/nav.config";
import Link from "next/link";

const HeadBar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Toolbar
                sx={{
                  minHeight: "10px !important",
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "start",
                  }}
                >
                  {headlinks.map((link) => (
                    <ListItem
                      key={link.name}
                      disablePadding
                      sx={{ width: "fit-content" }}
                    >
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                          py: "0",
                          maxWidth: "100em",
                          flexGrow: 0,
                          width: "fit-content",
                        }}
                        href={link.href}
                      >
                        <ListItemText
                          primary={link.name}
                          primaryTypographyProps={{ fontSize: ".75rem" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Toolbar>
              <Toolbar>
                <GiHospitalCross
                  style={{ fontSize: "2rem", marginRight: "1rem" }}
                />
                <Typography variant="h5">Upadhyay Hospital</Typography>
              </Toolbar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar
        sx={{
          height: {
            xs: "45px",
            sm: "64px",
            md: "105px",
            lg: "105px",
            xl: "105px",
          },
        }}
      />
    </div>
  );
};

export default HeadBar;
