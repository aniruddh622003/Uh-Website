"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { GiHospitalCross } from "react-icons/gi";
import React from "react";
import { headlinks, navlinks } from "@/config/nav.config";
import Link from "next/link";

const HeadBar = () => {
  const [deptMenu, setDeptMenu] = React.useState(null);

  const handleDeptMenuOpen = (event) => {
    setDeptMenu(event.currentTarget);
  };

  const handleDeptMenuClose = () => {
    setDeptMenu(null);
  };

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
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  padding: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <GiHospitalCross
                    style={{ fontSize: "2rem", marginRight: "1rem" }}
                  />
                  <Typography variant="h5">Upadhyay Hospital</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  {navlinks.map((link) => (
                    <React.Fragment key={link.name}>
                      <Button
                        color="white"
                        href={link.href != "" ? link.href : null}
                        onClick={(e) => {
                          if (link.name == "Departments") {
                            handleDeptMenuOpen(e);
                          }
                        }}
                      >
                        {link.name}
                      </Button>
                      {link.submenu && (
                        <Menu
                          anchorEl={deptMenu}
                          open={Boolean(deptMenu)}
                          onClose={handleDeptMenuClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          keepMounted
                        >
                          {link.submenu.map((sublink) => (
                            <Link key={sublink.name} href={sublink.href}>
                              <MenuItem>
                                <Typography variant="body1" color="primary">
                                  {sublink.name}
                                </Typography>
                              </MenuItem>
                            </Link>
                          ))}
                        </Menu>
                      )}
                    </React.Fragment>
                  ))}
                </Box>
              </Box>
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
